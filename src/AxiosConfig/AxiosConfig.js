import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import store from "../Store/store";
import {changeloader} from'../Store/slices/loader'


const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

axiosInstance.interceptors.request.use((config) => {
  // console.log(config)
  // if(config.url=="products"&&config.method=="post"){

  // }
  store.dispatch(changeloader(true))
  return config

},
  (error) => {
    return Promise.reject(error)
  }

)
axiosInstance.interceptors.response.use((res) => {
  store.dispatch(changeloader(false))

  return res

}, (error) => {
  return Promise.reject(error)


})
export default axiosInstance;