import image from '../../assets/user-profile.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '../../Service/AxiosInstance';
import apiPath from '../../Service/apiPath';


function UserDetails(){

    const{id} = useParams();
    const[userData, setUserData] = useState({name:'',email:''});
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetchDetails();
    },[]);

    const fetchDetails = async()=>{
        try {
            const result = await axiosInstance.get(`${apiPath.user.USER_DETAILS}/${id}`);
            console.log("Result",result?.data?.user);
            setUserData(result?.data?.user);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async () =>{
        if(window.confirm("Do you want to delete it?")){
            try {
            const result = await axiosInstance.delete(`/user/${id}`)
            console.log(result);
            toast.success("User deleted successfully.");
            setTimeout(()=>{
                navigate(-1);
            },2000);
        } catch (error) {
            console.log(error);
        }
    }
    }
    return<>
        <button onClick={()=>{ navigate(-1)}} className='btn btn-warning mt-4 ms-4'>Dashboard</button>
        <div className="card p-2 " style={{width:"450px",position:"absolute",top:"2rem",left:"30rem"}}>
            <ToastContainer/>
            <h2 className='text-center mt-2' >User Details</h2>
            <img className="card-img-top" src={image} alt="User Image" style={{width:"100%",height:"300px"}} />
            <div className='p-2'>
                <span className='fw-bold' style={{fontSize:"30px"}}>Name:</span>
                {loading ? <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div> 
                    : <span className='ms-2' style={{fontSize:"30px"}}>{userData?.name || "Unknown"}</span> }
            </div>
            <div className='p-2'>
                <span className='fw-bold' style={{fontSize:"30px"}}>Email:</span>
                {loading ? <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                     : <span className='ms-2' style={{fontSize:"30px"}}>{userData?.email || "Unknown"}</span>}
                
            </div> 
            <div className='text-center p-2'>

            <button onClick={()=> navigate(`/edit-user/${id}`)} className='btn btn-success  w-100'>Edit</button>
            <button onClick={()=> handleDelete()} className='btn btn-danger mt-2 w-100'>Delete</button>
            </div>
        </div>
    </>
}
export default UserDetails;