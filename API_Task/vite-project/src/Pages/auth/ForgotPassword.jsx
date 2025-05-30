import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../Service/AxiosInstance";

function ForgotPassword(){
  const[email,setEmail] = useState();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/user/forgot-password',{email});
      console.log(response.data.data);

      toast.success("Password reset link has been sent to your Email");
      
      setTimeout(()=>{
        <Navigate to={'/'}/>
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
                <h3 className="mb-4 text-center">Forgot Password</h3>
                <form onSubmit={handleSubmit}>                
                  <div className="form-outline mb-4">
                    <label className="form-label">Email</label>
                    <input onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your Email" type="text" className="form-control" required  
                    />
                  </div>
                  <button  type="submit" className="btn btn-warning btn-lg w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
}
export default ForgotPassword;