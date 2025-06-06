import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object({
    firstName: Yup.string().trim().required("First Name is required."),
    lastName: Yup.string().trim().required("Last Name is required."),
    email: Yup.string().email("Invalid Email").required("Email is required."),
    gender: Yup.string().required("Gender is required."),
    hobbies: Yup.array().min(1,"Choose at least one hobby."),
    status: Yup.string().required("Status is required."),
    description: Yup.string().required("Description is required.")
})

function Form(){
    const[data, setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        hobbies:[],
        status:'',
        description:''
    });
    const[storedData,setStoredData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();
    const {index} = useParams();

    const formik = useFormik({
        initialValues: data,
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values, {resetForm}) =>{
            if(editingId !== null){
                const updatedData = [...storedData];
                updatedData[editingId] = values;

                setStoredData(updatedData);
                setEditingId(null); 
                
                localStorage.setItem("UserData", JSON.stringify(updatedData));
                toast.success("Edit successfully.");
                setTimeout(()=>{
                    navigate('/');
                },2000);
            }
            else{
                const updatedData = [...storedData,values];
                setStoredData(updatedData);
                localStorage.setItem("UserData", JSON.stringify(updatedData));
                toast.success("Data saved successfully.")
                setTimeout(()=>{
                    navigate('/');
                },2000);
            }
            resetForm();
            setData({
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                hobbies: [],
                status: "",
                description: "",
            });
        }
    })


    useEffect(()=>{
        if(index !== undefined){

            const getData = localStorage.getItem("UserData");
            const parsedData = JSON.parse(getData) || [];
            setStoredData(parsedData);
            console.log(parsedData);
            const user = parsedData[index];
            if(user){
                setData(user);
            }
        }
    },[index]);

    return<>
        <div className="container justify-content-center align-items-center d-flex mt-4">
            <ToastContainer/>
            <button style={{
            position: "absolute",
            top:"2.5rem",
            borderRadius: "5px",
            left:"83%"
          }} className="btn btn-secondary" onClick={()=>navigate(-1)}>Users List</button>
            <div className="bg-info " style={{height:"auto",width:"500px",boxShadow:"10px 10px 10px grey"}}>
                <h3 className="text-center bg-dark text-white p-2">SignUp Form</h3>
                <form onSubmit={formik.handleSubmit} className="p-2" action="" >
                    <div className="form-group p-2">
                        <div className="mt-2">

                        <label className="form-label" >First Name</label>
                        <input className="form-control" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder="Enter your First Name"/>
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-danger">{formik.errors.firstName}</div>
                        )}

                        </div>
                    <div className="mt-2">
                        <label className="form-label" >Last Name</label>
                        <input className="form-control" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder="Enter your Last Name" />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="text-danger">{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div className="mt-2">
                        <label className="form-label" >Email Name</label>
                        <input className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" placeholder="Enter your Email" />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-danger">{formik.email}</div>
                        )}
                    </div>
                        <label >Gender</label>
                    <div className="form-check mt-2">
                        <input className="form-check-input" value="male" onChange={formik.handleChange} type="radio" name="gender" checked={data.gender === "male"} /><label>Male</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" value="female" onChange={formik.handleChange} type="radio" name="gender" checked={data.gender === "female"} /><label>Female</label>
                        {formik.touched.gender && formik.errors.gender && (
                            <div className="text-danger">{formik.errors.gender}</div>
                        )}
                    </div>
                    <label>Choose hobbies</label>
                    {["cricket","volleyball","football","tennis"].map((hobby)=>(
                        <div className="form-check" key={hobby}>
                            <input checked={formik.values.hobbies.includes(hobby)} className="form-check-input" name="hobbies" value={hobby} onChange={formik.handleChange} type="checkbox" />
                            <label>{hobby.charAt(0).toUpperCase() + hobby.slice(1)}</label>   
                        </div>

                    ))}
                        {formik.touched.hobbies && formik.errors.hobbies && (
                            <div className="text-danger">{formik.errors.hobbies}</div>
                        )}
                        <label htmlFor="">Select Status</label>
                        <div>
                        <select className="form-select-sm mb-2" onChange={formik.handleChange} name="status" value={formik.values.status} onBlur={formik.handleBlur}>
                            <option value="">Select Status</option>
                            <option selected={data.status === "active"} value="active">Active</option>
                            <option selected={data.status === "inactive"} value="inactive">Inactive</option>
                        </select>
                        {formik.touched.status && formik.errors.status && (
                        <div className="text-danger">{formik.errors.status}</div>
                        )}
                        </div>
                        <label>Description</label>
                        <div>
                        <textarea value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-2" name="description" id=""></textarea>
                        {formik.touched.description && formik.errors.description && (
                        <div className="text-danger">{formik.errors.description}</div>
                        )}
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Save</button>
                    </div>

                </form>
            </div>
        </div>
    </>
}
export default Form;