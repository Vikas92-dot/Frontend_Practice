import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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

    useEffect(()=>{
        const getData = localStorage.getItem("FormData");
        const parsedData = JSON.parse(getData);
        setStoredData(parsedData);
        console.log(parsedData);
        
    },[]);

    const handleChange=(e)=>{
        if(e.target.name === "hobbies"){
            const value = e.target.value;
            setData({...data,hobbies:[...data.hobbies,value]})
        }
        else setData({...data,[e.target.name]: e.target.value})
        console.log(data);
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const savedData = [...storedData,data];
        const parsedData = JSON.stringify(savedData)
        localStorage.setItem("FormData",parsedData)
        setStoredData([...storedData,data])
        toast.success("Data Saved Successfully.")
    }
    return<>
        <div className="container justify-content-center align-items-center d-flex mt-4">
            <ToastContainer/>
            <div className="bg-secondary" style={{height:"auto",width:"500px",boxShadow:"10px 10px 10px grey"}}>
                <h3 className="text-center bg-dark text-white p-2">SignUp Form</h3>
                <form onSubmit={handleSubmit} className="p-2" action="" >
                    <div className="form-group p-2">
                        <div className="mt-2">

                        <label className="form-label" >First Name</label>
                        <input className="form-control" name="firstName" value={data.firstName} onChange={handleChange} type="text" placeholder="Enter your First Name"/>
                        </div>
                    <div className="mt-2">
                        <label className="form-label" >Last Name</label>
                        <input className="form-control" name="lastName" value={data.lastName} onChange={handleChange} type="text" placeholder="Enter your Last Name" />
                    </div>
                    <div className="mt-2">
                        <label className="form-label" >Email Name</label>
                        <input className="form-control" name="email" value={data.email} onChange={handleChange} type="email" placeholder="Enter your Email" />
                    </div>
                        <label >Gender</label>
                    <div className="form-check mt-2">
                        <input className="form-check-input" value="male" onChange={handleChange} type="radio" name="gender" /><label>Male</label>
                    </div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" value="female" onChange={handleChange} type="radio" name="gender" /><label>Female</label>
                    </div>
                    <label>Choose hobbies</label>
                        <div className="form-check mt-2">
                            <input className="form-check-input" name="hobbies" value="Coding" onChange={handleChange} type="checkbox" />
                            <label>Coding</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" name="hobbies" value="Painting" onChange={handleChange} type="checkbox" />
                            <label>Painting</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" name="hobbies" value="Singing" onChange={handleChange} type="checkbox" />
                            <label>Singing</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" name="hobbies" value="Dancing" onChange={handleChange} type="checkbox" />
                            <label>Dancing</label>
                        </div>
                        <label htmlFor="">Select Status</label>
                        <div>
                        <select className="form-select-sm mb-2" onChange={handleChange} name="status" id="">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        </div>
                        <label>Description</label>
                        <div>
                        <textarea value={data.description} onChange={handleChange} className="form-control mt-2" name="description" id=""></textarea>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Save</button>
                    </div>

                </form>
            </div>
        </div>
    </>
}
export default Form;