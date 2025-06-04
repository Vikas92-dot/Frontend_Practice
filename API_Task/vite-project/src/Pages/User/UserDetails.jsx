import image from '../../assets/user-profile.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import userService from '../../Service/UserApi';
import { Button } from '../../Components/button';



function UserDetails(){

    const{id} = useParams();
    const[userData, setUserData] = useState({name:'',email:''});
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [processing,setProcessing] = useState(false);

    useEffect(()=>{
        fetchDetails();
    },[]);

    const fetchDetails = async()=>{
        try {
            const result = await userService.show({id});
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
            setProcessing(true);
            const result = await userService.delete({id});
            if(result){
                setProcessing(false);
            }
            console.log(result);
            toast.success("User deleted successfully.");
            
            navigate(-1);
            
        } catch (error) {
            console.log(error);
        }
    }
    }
    return<>
        <Button onClick={()=>{ navigate(-1)}} className='btn btn-warning mt-4 ms-4'>Dashboard</Button>
        <div className="card p-2 " style={{width:"450px",position:"absolute",top:"2rem",left:"30rem",background: "linear-gradient(to bottom, #FFF8E1,rgb(243, 255, 79))"}}>
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

            <Button onClick={()=> navigate(`/edit-user/${id}`)} className='btn btn-success  w-100'>Edit</Button>
            <Button disabled={processing} onClick={()=> handleDelete()} className='btn btn-danger mt-2 w-100'>{processing ? <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                          </div> : "Delete"}</Button>
            </div>
        </div>
    </>
}
export default UserDetails;