import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/button";
import { useDispatch } from "react-redux";
import authThunk from "../../Redux/auth/authThunk";
import { Input } from "../../Components/Input";
import { ForgotPasswordUI } from "../../features/authFeatures/ForgotPasswordUI";


function ForgotPassword() {
  const [email, setEmail] = useState();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const body = { email }
    dispatch(authThunk.forgotPassword(body)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {

        setProcessing(false);
        navigate(`/`)
      }
      else {
        setProcessing(false);
      }
    })
  }

  return <>
    {/* <section  style={{ background: "linear-gradient(to bottom, #FFF8E1, #FFD54F)", height:"100vh" }}>
        
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-4">
              <div className="card rounded-3 p-4">
                <h3 className="mb-4 text-center">Forgot Password</h3>
                <form onSubmit={handleSubmit}>                
                  <div className="form-outline mb-4">
                    <label className="form-label">Email</label>
                    <Input onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your Email" type="text" className="form-control" required    
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
      </section> */}
    <ForgotPasswordUI handleSubmit={handleSubmit} setEmail={setEmail} processing={processing} />

  </>
}
export default ForgotPassword;