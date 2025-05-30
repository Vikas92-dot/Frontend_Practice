import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../Helper/AxiosInstance";

function ResetPassword(){
  const[password,setPassword] = useState();
  const[confirmPass,setConfirmPass] = useState();
  const[passError,setPassError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const {id,token} = useParams();
  const userId = id;
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const value = e.target.value;
    if(e.target.name === 'password'){
      setPassword(value);
      if (confirmPass && value !== confirmPass) {
        setPassError("Password do not match.");
      } else {
        setPassError("");
      }
    }
    else if(e.target.name === 'confirmPass'){
      setConfirmPass(value);
      if (password && value !== password) {
        setPassError("Password do not match.");
      } else {
        setPassError("");
      }
    }
  }

  const handleSubmit = async(e)=>{
    console.log("Id and token",userId,token);
    
    e.preventDefault();
    if (password !== confirmPass) {
      console.log(password,confirmPass);
      
      setPassError("Password do not match.");
      return;
    }
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
                    <div className="input-group">
                    <input onChange={handleChange} label="password" name="password" value={password} type={showPassword ? "text" : "password"} className="form-control"   
                    />
                    <span className="input-group-text" onClick={()=>setShowPassword(!showPassword)} style={{cursor:"pointer"}}>
                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                    </div>
                    
                    <label className="form-label">Confirm Password</label>
                    <div className="input-group">

                    <input onChange={handleChange} name="confirmPass" value={confirmPass} type={showConfirmPassword ? "text" : "password"} className="form-control"   
                    /> 
                    <span className="input-group-text" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} style={{cursor:"pointer"}}>
                    {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                    </div>
                  </div>
                  {passError && <p className="text-danger">{passError}</p>}
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