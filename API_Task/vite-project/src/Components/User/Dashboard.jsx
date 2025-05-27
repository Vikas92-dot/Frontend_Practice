import axios from "axios";
import { useEffect, useState } from "react";
import apis from "../apis";
import { useParams } from "react-router-dom";

function Dashboard(){
    
    const [users, setUsers] = useState([]);
    const[page,setPage] = useState(1);
    const {token} = useParams();
    
    useEffect(()=>{  
        getUsers();        
    },[])

    const getUsers = async()=>{
        try {
        const users = await axios.get(`${apis.ALL_USERS}?pageNumber=${page}&pageSize=10`,{
            headers: { Authorization: `Bearer ${token}` }});
            console.log("All Users",users);
        
        } catch (error) {
            console.log(error);
            
        }
    }

    return<>
        </>
}
export default Dashboard;
