import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import authService from "../../Service/AuthApi";



function VerifyEmail(){
    const {email} = useParams();
    const emailVerificationTOken = localStorage.getItem("emailToken");
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [processing,setProcessing] = useState(false);

    
    const handleSubmit = async (e)=>{ 
        e.preventDefault();
        try {
            setProcessing(true);
            console.log(email,emailVerificationTOken,id);
            // const body ={
            //     emailVerificationTOken:emailVerificationTOken,
            //     id:id
            // };
            
            const result = await authService.emailVerification({emailVerificationTOken,id});

            if(result){
                setProcessing(false);
            }
            console.log(result);
            toast.success("Email Verified Successfully");

            localStorage.removeItem('emailToken');
            navigate('/');
            
            
        } catch (error) {
            setProcessing(false);
            console.log(error);
        }
    }
    return<>
        <div className="container  justify-content-center align-item-center d-flex">
            <div className="row mt-5" style={{boxShadow:"10px 10px 10px grey", height:"auto",width:"300px", borderRadius:"10px"}}>
                <h3 className="text-center p-2 text-white bg-info" style={{width:"100%",height:"50px"}}>Email-Verification</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-2">
                        <label className="form-label">Email</label>
                        <input readOnly name="email" value={email} className="form-control mb-2" type="email"/>
                        <button disabled={processing === true} type="submit" className="btn btn-success text-white fw-bold mt-4">{processing === true ? <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div> : "Verify"}</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default VerifyEmail;