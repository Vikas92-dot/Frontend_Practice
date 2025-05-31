import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import apiPath from "../../Service/apiPath";
import axiosInstance from "../../Helper/AxiosInstance";


function VerifyEmail(){
    const {email} = useParams();
    const emailVerificationTOken = localStorage.getItem("emailToken");
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    
    
    const handleSubmit = async (e)=>{ 
        e.preventDefault();
        try {
            console.log(email,emailVerificationTOken,id);
            const result = await axiosInstance.get(`${apiPath.auth.EMAIL_VERIFICATION}?token=${emailVerificationTOken}&userId=${id}`)
            console.log(result);
            toast.success("Email Verified Successfully");

            setTimeout(()=>{
                localStorage.removeItem('emailToken');
                navigate('/');
            },2000);
            
        } catch (error) {
            console.log(error);
        }
    }
    return<>
        <div className="container  justify-content-center align-item-center d-flex">
            <ToastContainer/>
            <div className="row mt-5" style={{boxShadow:"10px 10px 10px grey", height:"auto",width:"300px", borderRadius:"10px"}}>
                <h3 className="text-center p-2 text-white bg-info" style={{width:"100%",height:"50px"}}>Email-Verification</h3>
                <form onSubmit={handleSubmit} >
                    <div className="form-group p-2">
                        <label className="form-label">Email</label>
                        <input readOnly name="email" value={email} className="form-control mb-2" type="email"/>
                        <button type="submit" className="btn btn-success text-white fw-bold mt-4">Verify</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default VerifyEmail;