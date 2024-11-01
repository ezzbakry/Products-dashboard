import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Navbar'
// import Users from './components/Users/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Usersfunctional from './components/Users/Usersfunctional'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/Aboutus/Aboutus'
import Login from './pages/Form/Login'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Notfound from './pages/Notfound/Not'
import Values from './pages/Aboutus/Values/Values'
import Vision from './pages/Aboutus/Vision/Vision'
import Productdetails, { ErrorBoundary, loaders as loaderdetails } from './pages/Products/Productdetails'
import Products from './pages/Products/Products'
import { Provider, useSelector } from 'react-redux'
import store from './Store/store'
import AppLayout from './Applayout'
import { Colorprovider } from './context/color'
import { FontProvidor } from './context/fontcol'
import { Nameprovider } from './context/name'
import Register from './pages/register/register'
import Protectedcomponent from './components/Guards/protectedroute'



function App() {
  // const [count, setCount] = useState(0)
  // const lang = useSelector((lang) => lang.language.language)
  // console.log(lang)
  const [col, setcol] = useState("white")
  const [fontcol, setfontcol] = useState("black")
  const [Name, setname] = useState("Ezz")

  const routes = createBrowserRouter([
    {
      path: "/", element: <AppLayout></AppLayout>, children: [
        { index: true, element: <Home /> },
        {
          path: "about", element: <About />, children: [
            { index: true, element: <Values></Values> },
            { path: "vision", element: <Vision></Vision> },
          ]
        },
        { path: "login", element: <Login /> },
        { path: "contact", element: <Protectedcomponent><Contact /></Protectedcomponent> },
        { path: "products", element: <Products></Products> },
        {path:"register",element:<Register></Register>},
        { path: "productDetails/:id", element: <Productdetails />, loader: loaderdetails, errorElement: <ErrorBoundary></ErrorBoundary> }
      ],
    },
    { path: "*", element: <Notfound /> }, ,
  ]);



  return (
    <>
      <Colorprovider value={{ col, setcol }}>
        <Nameprovider value={{ Name, setname }}>
          <FontProvidor value={{ fontcol, setfontcol }}>
            <Provider store={store}>
              <RouterProvider router={routes}></RouterProvider>
            </Provider>
          </FontProvidor>
        </Nameprovider>
      </Colorprovider>




      {/* <BrowserRouter >

          <Header />
          <Routes>
            <Route index element={<Home />} />

            <Route path="/about" element={<About />}>
              <Route index element={<Values />} />
              <Route path="vision" element={<Vision />} />
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetails/:id" element={<Productdetails/>} loader={loaderdetails}/>

            <Route path="*" element={<Notfound />} />
          </Routes>


        </BrowserRouter>
      </div> */}

    </>
  )



}

export default App
