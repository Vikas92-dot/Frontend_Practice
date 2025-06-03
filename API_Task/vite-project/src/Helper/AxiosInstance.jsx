import axios from "axios";
import { Navigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
    baseURL:baseURL,
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
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          <Navigate to={'/'} />
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;