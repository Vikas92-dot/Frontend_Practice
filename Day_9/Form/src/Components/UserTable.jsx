import { useEffect } from "react";

function UserTable({storedData}){
    
    useEffect(()=>{
        console.log("Data update");
        
    },[storedData])
    return<>
        <div className="container-fluid">
            <h2 style={{position:"absolute",top:"49rem",left:"45%"}}>Users List</h2>
                <table className="table table-bordered table-hover text-center" style={{position:"absolute",top:"53rem",width:"80%",left:"10%"}}>
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
                                </tr>
                            ))}
                        
                    </tbody>
                </table>
        </div>
    </>
}
export default UserTable;