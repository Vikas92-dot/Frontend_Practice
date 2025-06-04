import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import authService from "../../Service/AuthApi";
import { Button } from "../../Components/button";



function ForgotPassword(){
  const[email,setEmail] = useState();
  const [processing,setProcessing] = useState(false);


  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setProcessing(true);
      const body ={
        email:email
      }
      const response = await authService.forgotPassword(body);
      if(response){
        setProcessing(false);
      }
      console.log(response.data.data);

      toast.success("Password reset link has been sent to your Email");
      
        <Navigate to={'/'}/>
      
      
    } catch (error) {
      setProcessing(false);
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  }

    return<>
        <section  style={{ background: "linear-gradient(to bottom, #FFF8E1, #FFD54F)", height:"100vh" }}>
        
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
                  <Button disabled={processing === true} type="submit" className="btn btn-warning btn-lg w-100">{processing === true ? 
                        <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div> : "Submit"}</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
}
export default ForgotPassword;