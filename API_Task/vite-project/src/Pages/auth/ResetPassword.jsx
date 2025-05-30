import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../Service/AxiosInstance";

function ResetPassword(){
  const[password,setPassword] = useState();
  const {id,token} = useParams();
  const userId = id;
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    console.log("Id and token",userId,token);
    
    e.preventDefault();
    try {
        const response = await axiosInstance.post('/user/reset-password',{userId,token,password});
        console.log(response.data);
        toast.success("Password Changed Successfully.")
        
        setTimeout(()=>{
          navigate('/');
        },2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.message);
      
    }
  }

  return<>
  <section  style={{ background: "linear-gradient(to bottom, #FFF8E1, #FFD54F)", height:"100vh" }}>
        <ToastContainer/>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-4">
              <div className="card rounded-3 p-4">
                <h3 className="mb-4 text-center">Reset Password</h3>
                <form>                
                  <div className="form-outline mb-4">
                    <label className="form-label">New Password</label>
                    <input label="password" value={password} onChange={(event)=>setPassword(event.target.value)} type="passsword" className="form-control" required  
                    />
                  </div>
                  <button onClick={handleSubmit} type="submit" className="btn btn-warning btn-lg w-100">Change Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
}
export default ResetPassword;