import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './Store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <div>hello from main</div> */}

    <Provider store={store}>
      <App />
    </Provider >
  </StrictMode>,
)
