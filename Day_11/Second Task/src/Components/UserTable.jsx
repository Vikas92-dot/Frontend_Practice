import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function UserTable() {
  const[data, setData] = useState({
          firstName:"",
          lastName:"",
          email:"",
          gender:"",
          hobbies:[],
          status:"",
          description:""
          })
  
      const [storedData, setStoredData] = useState([]);
      const [editingId, setEditingId] = useState(null);
      const navigate = useNavigate();
  
      const validateEmail = (email) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
  
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
      
      const handleEdit = (index) => {
      if (editingId === index) {
        setEditingId(null);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          hobbies: [],
          status: "",
          description: "",
        });
      } else {
        setEditingId(index);
        setData({ ...storedData[index] });
      }
    };
  
      const handleChange=(e)=>{
          
          if(e.target.name === "hobbies"){
              const value = e.target.value;
              const checked = e.target.checked;
  
              if (checked) {
                  setData({...data, hobbies: [...data.hobbies, value]});
              } else {
                  setData({...data, hobbies: data.hobbies.filter(h => h !== value)});
              }
          }
          else
          setData({...data,[e.target.name]: e.target.value})
          console.log(data);
          
      }
      const handleSubmit = (e)=>{
          e.preventDefault();
          const {firstName, lastName, email,gender,hobbies,status,description} = data;
  
          if(!firstName.trim()){            
              return toast.error("First Name is required.");
          }
          if(!lastName.trim()){
              return toast.error("Last Name is required.");
          }
          if (!email.trim() || !validateEmail(email)) {
                  toast.error("Enter a valid email.");
                  return;
              }
          if(!gender.trim()){
              return toast.error("Gender is required");
          }
          if(hobbies.length === 0){
              return toast.error("Choose any hobbies");
          }
          if(!status.trim()){
              return toast.error("Status is required.");
          }
          if(!description.trim()){
              return toast.error("Description is required.");
          }
          
          
          if(editingId !== null){
              const updatedData = [...storedData];
              updatedData[editingId] = data;
              
              setStoredData(updatedData);
              console.log(updatedData);
              setEditingId(null);
  
              const convertedData = JSON.stringify(updatedData);
              localStorage.setItem("UserData",convertedData);
              toast.success("Edit successfully.");
          }
          else{
  
              const updatedData = [...storedData,data];
              const convertedData = JSON.stringify(updatedData);
              localStorage.setItem("UserData",convertedData);
              setStoredData(updatedData);
              toast.success("Data Saved Successfully");
          }
          setData({
              firstName: "",
              lastName: "",
              email: "",
              gender: "",
              hobbies: [],
              status: "",
              description: "",
          });
      }
      useEffect(()=>{  
          const stringData = localStorage.getItem("UserData");
          const userData = JSON.parse(stringData) || [];
          setStoredData(userData);
          
      },[])
  return (
    <>
      <div className="container m-0">
        <ToastContainer/>
        <h2
          className="bg-warning p-2 text-center"
          style={{
            position: "absolute",
            borderRadius: "5px",
            left:"-1px",
            width:"100%"
          }}
        >
          Users List
        </h2>
        <button style={{
            position: "absolute",
            top:"4rem",
            borderRadius: "5px",
            left:"83%"
          }} className="btn btn-success" onClick={()=>navigate('/form')}>Add User</button>
        <table
          className="table  table-bordered table-responsive table-hover text-center"
          style={{
            position: "absolute",
            top: "7rem",
            width: "80%",
            left: "10%",
            boxShadow: "10px 10px 10px 10px grey",
          }}
        >
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
            {storedData.map((datas, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editingId === index ? (
                    <input
                      name="firstName"
                      onChange={handleChange}
                      className="form-control"
                      value={data.firstName}
                    />
                  ) : (
                    datas.firstName
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <input
                      name="lastName"
                      onChange={handleChange}
                      className="form-control"
                      value={data.lastName}
                    />
                  ) : (
                    datas.lastName
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <input
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      value={data.email}
                    />
                  ) : (
                    datas.email
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={handleChange}
                      />{" "}
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleChange}
                        style={{ marginLeft: "10px" }}
                      />
                      Female
                    </>
                  ) : (
                    datas.gender
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <>
                      {["cricket", "football", "tennis", "volleyball"].map(
                        (hobby) => (
                          <label key={hobby} style={{ marginRight: "10px" }}>
                            <input
                              type="checkbox"
                              name="hobbies"
                              value={hobby}
                              checked={data.hobbies.includes(hobby)}
                              onChange={handleChange}
                            />{" "}
                            {hobby}
                          </label>
                        )
                      )}
                    </>
                  ) : (
                    datas.hobbies.join(", ")
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <select onChange={handleChange} className="form-select-sm mb-2" name="status">
                      <option value="">Select Status</option>
                              <option selected={data.status === "active"} value="active">Active</option>
                              <option selected={data.status === "inactive"} value="inactive">Inactive</option>
                    </select>
                  ) : (
                    datas.status
                  )}
                </td>
                <td>
                  {editingId === index ? (
                    <textarea
                      name="description"
                      className="form-control"
                      value={data.description}
                      onChange={handleChange}
                    />
                  ) : (
                    datas.description
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className={
                      editingId === index
                        ? "btn btn-secondary mb-2"
                        : "btn btn-primary mb-2"
                    }
                  >
                    {editingId === index ? "Cancel" : "Edit"}
                  </button>
                  {editingId === index ? (
                    <button
                      onClick={handleSubmit}
                      className="btn btn-success"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default UserTable;
