
function UserTable({storedData,handleEdit,editingId,handleDelete}){
    

    return<>
        <div className="container">
            <h2 className="bg-warning p-2" style={{position:"absolute",borderRadius:"5px",top:"49rem",left:"45%",boxShadow:"5px 5px 5px grey"}}>Users List</h2>
                <table className="table table-bordered table-hover text-center" style={{position:"absolute",top:"53rem",width:"80%",left:"10%",boxShadow:"10px 10px 10px 10px grey"}}>
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
                                        <button onClick={()=>handleEdit(index)} className={ editingId !== null ? "btn btn-secondary mb-2" : "btn btn-primary mb-2"}>{editingId !== null ? "Cancel" : "Edit"}</button>
                                        <button onClick={()=> handleDelete(index)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        
                    </tbody>
                </table>
        </div>
    </>
}
export default UserTable;