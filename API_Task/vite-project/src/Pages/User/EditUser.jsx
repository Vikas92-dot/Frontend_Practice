import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import userService from "../../Service/UserApi";



const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Invalid Email").required("Email is required."),
    password: Yup.string().min(6).required("Password is required")
})

function EditUser(){
    const[data,setData] = useState({name:'',email:'',password:''});
    const{id} = useParams();
    const navigate = useNavigate();
    //const [processing,setProcessing] = useState(false);

    useEffect(()=>{
        fetchDetails();
    },[]);

    const fetchDetails = async()=>{
        try {
            const result = await userService.show({id});
            console.log("Result",result.data.user);
            setData(result?.data?.user);
            
        } catch (error) {
            console.log(error);
        }
    }

    const formik = useFormik({
        initialValues:data,
        validationSchema,
        enableReinitialize:true,
        onSubmit: async(values,{setSubmitting})=>{
            const {name,email,password} = values;
            try {
                //setProcessing(true);
                const status = await userService.update({id,name,email,password});

                if(status){
                    setSubmitting(false);    
                }
                console.log(status);
                toast.success("Save Changes Successfully");
                navigate(-1);
                
            } catch (error) {
                setSubmitting(false);    
                console.log(error);
                toast.error("Something went wrong")
                
            }
        }
    })
    return<>
        <div className="container justify-content-center align-item-center d-flex">
            <button onClick={()=>{ navigate(-1)}} style={{width:"6rem",height:"3rem",position:"absolute",left:"2%"}} className='btn btn-warning mt-4 '>Dashboard</button>
            <div className="row mt-5" style={{boxShadow:"10px 10px 10px grey", height:"auto",width:"300px", borderRadius:"10px",background: "linear-gradient(to bottom, #FFF8E1,rgba(252, 255, 79, 0.57))"}}>
                <h3 className="text-center p-2 text-white bg-secondary" style={{width:"100%",height:"50px",borderRadius:"5px"}}>Edit User</h3>
                <form onSubmit={formik.handleSubmit} >
                    <div className="form-group p-2">
                        <label className="form-label">Name</label>
                        <input 
                        name="name"
                        value={formik.values?.name} 
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
                        value={formik.values?.email} 
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

                        <button disabled={formik.isSubmitting} type="submit" className="btn btn-success w-100 mt-2 mb-2 ">{formik.isSubmitting ? 
                        <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div> : "Save"}</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default EditUser;