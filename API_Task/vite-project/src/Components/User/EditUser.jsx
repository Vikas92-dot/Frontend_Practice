import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from 'yup';
import apis from "../apis";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Invalid Email").required("Email is required."),
    password: Yup.number().required("Password is required")
})

function EditUser(){
    const[data,setData] = useState({name:'',email:'',password:''});
    const{id,token} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchDetails();
    },[]);

    const fetchDetails = async()=>{
        try {
            const result = await axios.get(`${apis.GET_DETAILS}/${id}`,{
                headers: {Authorization:`Bearer ${token}`}
            });
            console.log("Result",result.data.user);
            setData(result.data.user);
            
        } catch (error) {
            console.log(error);
        }
    }

    const formik = useFormik({
        initialValues:data,
        validationSchema,
        enableReinitialize:true,
        onSubmit: async(values)=>{
            const {name,email,password} = values;
            try {
                const status = await axios.put(`${apis.EDIT_USER}/${id}`,{name,email,password},{
                    headers:{Authorization :`Bearer ${token}`}
                })
                console.log(status);
                toast.success("Save Changes Successfully");

                setTimeout(()=>{
                    navigate(-1);
                },2000);
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong")
                
            }
        }
    })
    return<>
        <div className="container justify-content-center align-item-center d-flex">
            <ToastContainer/>
            <div className="row mt-5" style={{boxShadow:"10px 10px 10px grey", height:"auto",width:"300px", borderRadius:"10px"}}>
                <h3 className="text-center p-2 text-white bg-secondary" style={{width:"100%",height:"50px",borderRadius:"5px"}}>Edit User</h3>
                <form onSubmit={formik.handleSubmit} >
                    <div className="form-group p-2">
                        <label className="form-label">Name</label>
                        <input 
                        name="name" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        className="form-control" 
                        type="text" 
                        placeholder="Enter your name"/>
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-danger">{formik.errors.name}</div>
                        )}

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
                        className="form-control mb-2" 
                        type="password" 
                        placeholder="Change Password"/>
                        {formik.touched.password && formik.errors.password && (
                          <div className="text-danger">{formik.errors.password}</div>
                        )}

                        <button type="submit" className="btn btn-success mt-4">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default EditUser;