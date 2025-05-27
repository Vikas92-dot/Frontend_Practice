import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import apis from "../apis";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { toast } from "react-toastify";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required."),
    password: Yup.number().required("Password is required.")
})

function Login(){
    const[data,setData] = useState({email:'',password:''});
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: data,
        validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) =>{
            const {email,password} = values;
        try {
            let result = await axios.post(apis.LOGIN,{email,password});
            console.log(result.data.data.token);
             const token = result.data.data.token;
            toast.success("Login Successfully");
            setTimeout(()=>{
                navigate(`/dashboard/${token}`)
            },2000);
            
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
        }
    })
    
    return<>
        <div className="container  justify-content-center align-item-center d-flex">
            <div className="row mt-5" style={{boxShadow:"10px 10px 10px grey", height:"auto",width:"300px", borderRadius:"10px"}}>
                <h3 className="text-center p-2 text-white bg-secondary" style={{width:"100%",height:"50px"}}>Login</h3>
                <form onSubmit={formik.handleSubmit} >
                    <div className="form-group p-2">
                        <label className="form-label">Email</label>
                        <input 
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        className="form-control mb-2" 
                        type="email" 
                        placeholder="Enter your Email"/>
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-danger">{formik.errors.email}</div>
                        )}

                        <label className="form-label">Password</label>
                        <input 
                        name="password" 
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        className="form-control" 
                        type="password" 
                        placeholder="Enter your Password"/>
                        {formik.touched.password && formik.errors.password && (
                          <div className="text-danger">{formik.errors.password}</div>
                        )} 

                        <button type="submit" className="btn btn-success mt-4">Login</button>
                    </div>
                </form>
                    <p className="mb-2 mt-2 text-dark text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-warning fw-bold">
                            Register
                        </Link>
                    </p>
            </div>
        </div>
    </>
}
export default Login;