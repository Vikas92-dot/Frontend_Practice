import { useParams } from "react-router-dom";
import apis from "../apis";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function VerifyEmail(){
    const {email,emailVerificationTOken,id} = useParams();
    
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            console.log(email,emailVerificationTOken,id);
            const result = await axios.get(`${apis.VERIFICATION}?token=${emailVerificationTOken}&userId=${id}`)
            console.log(result);
            toast.success("Email Verified Successfully");
            
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