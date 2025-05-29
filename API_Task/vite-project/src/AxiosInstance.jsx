import axios from "axios";
import { Navigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:"https://node-js-wse4.onrender.com",
     headers: {
    'Content-Type': 'application/json',
  },
})

//Request Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
      console.log("Route error:",error);
    return Promise.reject(error); 
  }
);


//Response Interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        
        if(error.response && error.response.status === 404 || error.response.status === 401){
            <Navigate to={'/'} />
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;