import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import {toast, ToastContainer} from 'react-toastify';
import backgroundImage from '../assets/back2.jpg'


function SignUpForm(){
    const[data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        hobbies:[],
        status:"",
        description:""
        })

    const [storedData, setStoredData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleDelete =(index)=>{
        if(window.confirm("Do you want to delete it?")){
            storedData.splice(index,1);
            
            const updatedData = [...storedData];
            setStoredData(updatedData);
            console.log(updatedData);
            setEditingId(null);

            const convertedData = JSON.stringify(updatedData);
            localStorage.setItem("UserData",convertedData);
            toast.success("Delete successfully.");
        }
    }
    
    const handleEdit =(index)=>{
        if(editingId === null){
            console.log("Set id");
            
            setEditingId(index);
            console.log(editingId);    

            setData(storedData[index])
        }
        else setEditingId(null);
        console.log("Click cancel");
        console.log(editingId);    
    }

    const handleChange=(e)=>{
        
        if(e.target.name === "hobbies"){
            const value = e.target.value;
            const checked = e.target.checked;

            if (checked) {
                setData({...data, hobbies: [...data.hobbies, value]});
            } else {
                setData({...data, hobbies: data.hobbies.filter(h => h !== value)});
            }
        }
        else
        setData({...data,[e.target.name]: e.target.value})
        console.log(data);
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const {firstName, lastName, email,gender,hobbies,status,description} = data;

        if(!firstName.trim()){            
            return toast.error("First Name is required.");
        }
        if(!lastName.trim()){
            return toast.error("Last Name is required.");
        }
        if (!email.trim() || !validateEmail(email)) {
                toast.error("Enter a valid email.");
                return;
            }
        if(!gender.trim()){
            return toast.error("Gender is required");
        }
        if(hobbies.length === 0){
            return toast.error("Choose any hobbies");
        }
        if(!status.trim()){
            return toast.error("Status is required.");
        }
        if(!description.trim()){
            return toast.error("Description is required.");
        }
        
        // const convertedData = JSON.stringify(data);
        // console.log(convertedData);
        // localStorage.setItem("UserData",convertedData);
        //sessionStorage.setItem("sessionData",convertedData)
        
        if(editingId !== null){
            const updatedData = [...storedData];
            updatedData[editingId] = data;
            
            setStoredData(updatedData);
            console.log(updatedData);
            setEditingId(null);

            const convertedData = JSON.stringify(updatedData);
            localStorage.setItem("UserData",convertedData);
            toast.success("Edit successfully.");
        }
        else{
            const updatedData = [...storedData,data];
            const convertedData = JSON.stringify(updatedData);
            localStorage.setItem("UserData",convertedData);
            setStoredData(updatedData);
            //alert("Data Saved Successfully..");
            toast.success("Data Saved Successfully");
        }
            
    }
    useEffect(()=>{
        //Local Storage
        // const stringData = localStorage.getItem("UserData");
        // const userData = JSON.parse(stringData);
        // console.log(userData);
        // setData(userData)   
         
        const stringData = localStorage.getItem("UserData");
        const userData = JSON.parse(stringData) || [];
        setStoredData(userData);
        //setData(userData[userData.length-1]);

         //Session Storage
        //  const stringData = sessionStorage.getItem("sessionData");
        // const userData = JSON.parse(stringData);
        // console.log(userData);
        // setData(userData)
        
    },[])
    return<>
        <div className="container" style={{backgroundImage:`url(${backgroundImage})`}}>
            <ToastContainer />

            <div className="row justify-content-center align-items-center display-flex">

                <div className="p-2 bg-dark"style={{boxShadow:"5px 5px 5px 5px grey",height:"auto", width:"40%",position:"absolute",top:"2rem", borderRadius:"5px"}}>
                
                    <div className="bg-primary text-white text-center" style={{height:"50px",width:"100%",alignItems:"center",justifyContent:"center",display:"flex" , borderRadius:"5px"}}>
                        <label style={{fontWeight:"bolder"}}>Sign-Up Form</label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-3">
                            
                            
                            <strong style={{color:"white"}}>First Name</strong>
                            <input  onChange={handleChange} value={data.firstName} name="firstName" className="form-control mt-2" type="text" placeholder="Enter Your First Name.." />

                            <strong style={{color:"white"}}>Last Name</strong>
                            <input  onChange={handleChange} value={data.lastName} name="lastName" className="form-control mt-2" type="text" placeholder="Enter Your Last Name.." />

                            <strong style={{color:"white"}}>Email</strong>
                            <input  onChange={handleChange} value={data.email} name="email" className="form-control mt-2 mb-2" type="email" placeholder="Enter Your Email.." />

                            <strong style={{color:"white"}}>Gender</strong>
                            <div className="form-check">
                            <input onChange={handleChange} type="radio" className="form-check-input" checked={data.gender === "male"}  name="gender"  value="male"/>
                            <label  className="form-check-label" style={{color:"white"}} for="radio1">Male</label>
                            </div>

                            <div className="form-check mb-2">
                                <input onChange={handleChange} type="radio" value="female" className="form-check-input" checked={data.gender === "female"}   name="gender" /><label  className="form-check-label" style={{color:"white"}} for="radio1">Female</label>
                            </div>
                            
                            <strong style={{color:"white"}}>Choose hobbies</strong>
                            <div className="form-check">
                                    
                                    <input checked={data.hobbies.filter(h=>{return h === "cricket"})[0] === "cricket"} onChange={handleChange} name="hobbies" value="cricket" type="checkbox" className="form-check-input"/><label  className="form-check-label" style={{color:"white"}} for="radio1">Cricket</label>
                            </div>
                            <div className="form-check">
                                    <input checked={data.hobbies.filter(h=>{return h === "volleyball"})[0] === "volleyball"} onChange={handleChange} name="hobbies" value="volleyball" type="checkbox" className="form-check-input"/><label  className="form-check-label" style={{color:"white"}} for="radio1">Volleyball</label>
                            </div>
                            <div className="form-check">
                                    <input checked={data.hobbies.filter(h=>{return h === "football"})[0] === "football"} onChange={handleChange} name="hobbies" value="football" type="checkbox" className="form-check-input"/><label  className="form-check-label" style={{color:"white"}} for="radio1">Football</label>
                            </div><div className="form-check">
                                    <input checked={data.hobbies.filter(h=>{return h === "tennis"})[0] === "tennis"} onChange={handleChange} name="hobbies" value="tennis" type="checkbox" className="form-check-input mb-2"/><label  className="form-check-label" style={{color:"white"}} for="radio1">Tennis</label>
                            </div>

                            <strong style={{color:"white"}}>Status</strong>
                            <div>
                            <select onChange={handleChange} className="form-select-sm mb-2" name="status" id="" >
                                <option value="">Select Status</option>
                                <option selected={data.status === "active"} value="active">Active</option>
                                <option selected={data.status === "inactive"} value="inactive">Inactive</option>
                            </select>
                            </div>

                            <strong style={{color:"white"}}>Description</strong>
                            <div className="form-group">
                                    <textarea onChange={handleChange}  value={data.description}  className="form-control mb-2" name="description" id=""></textarea>
                            </div>
                            
                            <button className="btn btn-success mt-2">{editingId !== null ? "Save Edit" : "Save"}</button>

                        </div>
                    </form>
                </div>
            
            </div>
        </div>
        <UserTable storedData={storedData} handleEdit={handleEdit} editingId={editingId} handleDelete={handleDelete}/>
    </>
}
export default SignUpForm;