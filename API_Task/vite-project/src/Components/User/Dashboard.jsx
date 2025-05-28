import axios from "axios";
import { useEffect, useState } from "react";
import apis from "../apis";
import { useNavigate, useParams } from "react-router-dom";

function Dashboard(){
    
    const [users, setUsers] = useState([]);
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(0);
    const {token} = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{  
        getUsers();
                
    },[])

    useEffect(()=>{
        getUsers();
    },[page]);

    const getUsers = async()=>{
        try {
        const users = await axios.get(`${apis.ALL_USERS}?pageNumber=${page}&pageSize=10`,{
            headers: { Authorization: `Bearer ${token}` }});
            console.log("All Users",users.data);
            setUsers(users.data.data);
            setLoading(false);
            setTotalPages(users.data.totalRecords);
            console.log(users.data.totalRecords);
        } catch (error) {
            console.log(error);
        }
    }
    const setNext =()=>{
        if(page < totalPages ){
            setPage((prev)=> prev+1);
        }
    } 
    const setPrevious =()=>{
        if(page > 1){
            setPage((prev)=> prev-1);
        }
    } 
    

    return<>
         <div className="row">
             <h2 className="text-center p-2 bg-info fw-bold" style={{borderRadius:"5px",}}>Users List</h2>
             <button onClick={()=> navigate('/register')} className="btn btn-warning fw-bold" style={{position:"absolute",left:"80%",top:"11%",width:"8%"}}>Add User</button>

             {loading 
                ?   <div className="text-center">
                            <div class="spinner-border" role="status">
                             <span class="visually-hidden">Loading...</span>
                            </div>
                    </div>
                : (<table className="table table-danger table-bordered border-dark table-hover text-center" style={{position:"absolute",top:"20%",left:"10%",width:"80%",height:"500px"}}>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={index}>
                            <td>{(page-1)*10+(index+1)}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={()=> navigate(`/user-details/${user.id}/${token}`)} className="btn btn-primary">See Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>) }
             
            
         </div>
          <div style={{position:"absolute",top:"46rem",left:"40%"}}>
                <button onClick={()=> setPrevious()} disabled={page === 1} className="btn btn-primary ml-2">Previous</button>
                <span className="fw-bold">Page {page} of {Math.ceil(totalPages/10)}</span>
                <button onClick={()=> setNext()} disabled={page === totalPages} className="btn btn-success ms-2">Next</button>
             </div>
        </>
}
export default Dashboard;
