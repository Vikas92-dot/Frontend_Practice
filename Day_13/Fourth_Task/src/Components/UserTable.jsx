import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserTable(){
    
    const [storedData, setStoredData] = useState([]);
    const [editingId, setEditingId] = useState(null); 
    const navigate = useNavigate();
    

      const handleDelete =(index)=>{
          if(window.confirm("Do you want to delete it?")){
              storedData.splice(index,1);
              
              const updatedData = [...storedData];
              setStoredData(updatedData);
              console.log(updatedData);
              setEditingId(null);
  
              const convertedData = JSON.stringify(updatedData);
              localStorage.setItem("UserData",convertedData);
              toast.success("Delete successfully.");
          }
      }

    useEffect(()=>{  
             
        const stringData = localStorage.getItem("UserData");
        const userData = JSON.parse(stringData) || [];
        console.log(userData);
        
        setStoredData(userData);
                      
        },[])

    return<>
        <div className="container">
            <h2 className="bg-warning p-2" style={{position:"absolute",borderRadius:"5px",left:"45%",top:"1rem",boxShadow:"5px 5px 5px grey"}}>Users List</h2>
                <button className="btn btn-primary" style={{position:"absolute",top:"2rem", left:"80%"}} onClick={()=> navigate(`/form`)}>Add User</button>
                <table className="table table-bordered table-hover text-center" style={{position:"absolute",top:"6rem",width:"80%",left:"10%",boxShadow:"10px 10px 10px 10px grey"}}>
                    <thead className="table-dark">
                        <tr>
                        <th>Sr No.</th>
                        <th>First Name</th> 
                        <th>Last Name</th>
                        <th>Email-Id</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {storedData.map((data,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.hobbies.join(", ")}</td>
                                    <td>{data.status}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <button onClick={()=> navigate(`/form/${index}`)} className="btn btn-primary mb-2">Edit</button>
                                        <button onClick={()=> handleDelete(index)} className="btn btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        
                    </tbody>
                </table>
        </div>
    </>
}
export default UserTable;
