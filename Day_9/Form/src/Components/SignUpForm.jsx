import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserTable from "./UserTable";

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required("First Name is required."),
  lastName: Yup.string().trim().required("Last Name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  gender: Yup.string().required("Gender is required."),
  hobbies: Yup.array().min(1, "Choose at least one hobby."),
  status: Yup.string().required("Status is required."),
  description: Yup.string().trim().required("Description is required."),
});

function SignUpForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    hobbies: [],
    status: "",
    description: "",
  });

  const [storedData, setStoredData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const stringData = localStorage.getItem("UserData");
    const userData = JSON.parse(stringData) || [];
    setStoredData(userData);
  }, []);

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      if (editingId !== null) {
        const updatedData = [...storedData];
        updatedData[editingId] = values;
        setStoredData(updatedData);
        localStorage.setItem("UserData", JSON.stringify(updatedData));
        toast.success("Edit successfully.");
        setEditingId(null);
      } else {
        const updatedData = [...storedData, values];
        setStoredData(updatedData);
        localStorage.setItem("UserData", JSON.stringify(updatedData));
        toast.success("Data Saved Successfully");
      }

      resetForm();
      setData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        hobbies: [],
        status: "",
        description: "",
      });
    },
  });

  const handleEdit = (index)=>{
        if(editingId === null){
            console.log("Set id");
            
            setEditingId(index);
            console.log(editingId);    

            setData(storedData[index])
            console.log("Data: ",data);
            
        }
        else setEditingId(null);
        console.log("Click cancel");
        console.log(editingId);    
    }

   const handleDelete =(index)=>{
        if(window.confirm("Do you want to delete it?")){
            storedData.splice(index,1);
            
            const updatedData = [...storedData];
            setStoredData(updatedData);
            console.log(updatedData);
            

            const convertedData = JSON.stringify(updatedData);
            localStorage.setItem("UserData",convertedData);
            toast.success("Delete successfully.");
        }
    }

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center align-items-center display-flex">
          <div
            className="p-2 bg-dark"
            style={{
              boxShadow: "5px 5px 5px 5px grey",
              height: "auto",
              width: "40%",
              position: "absolute",
              top: "2rem",
              borderRadius: "5px",
            }}
          >
            <div
              className="bg-primary text-white text-center"
              style={{
                height: "50px",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <label style={{ fontWeight: "bolder" }}>Sign-Up Form</label>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group p-3">
                <strong style={{ color: "white" }}>First Name</strong>
                <input
                  name="firstName"
                  className="form-control mt-2"
                  type="text"
                  placeholder="Enter Your First Name.."
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-danger">{formik.errors.firstName}</div>
                )}

                <strong style={{ color: "white" }}>Last Name</strong>
                <input
                  name="lastName"
                  className="form-control mt-2"
                  type="text"
                  placeholder="Enter Your Last Name.."
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-danger">{formik.errors.lastName}</div>
                )}

                <strong style={{ color: "white" }}>Email</strong>
                <input
                  name="email"
                  className="form-control mt-2 mb-2"
                  type="email"
                  placeholder="Enter Your Email.."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}

                <strong style={{ color: "white" }}>Gender</strong>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" style={{ color: "white" }}>
                    Male
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" style={{ color: "white" }}>
                    Female
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender && (
                  <div className="text-danger">{formik.errors.gender}</div>
                )}

                <strong style={{ color: "white" }}>Choose hobbies</strong>
                {["cricket", "volleyball", "football", "tennis"].map((hobby) => (
                  <div className="form-check" key={hobby}>
                    <input
                      type="checkbox"
                      name="hobbies"
                      value={hobby}
                      checked={formik.values.hobbies.includes(hobby)}
                      onChange={formik.handleChange}
                      className="form-check-input"
                    />
                    <label className="form-check-label" style={{ color: "white" }}>
                      {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
                    </label>
                  </div>
                ))}
                {formik.touched.hobbies && formik.errors.hobbies && (
                  <div className="text-danger">{formik.errors.hobbies}</div>
                )}

                <strong style={{ color: "white" }}>Status</strong>
                <div>
                  <select
                    name="status"
                    className="form-select-sm mb-2"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                {formik.touched.status && formik.errors.status && (
                  <div className="text-danger">{formik.errors.status}</div>
                )}

                <strong style={{ color: "white" }}>Description</strong>
                <textarea
                  name="description"
                  className="form-control mb-2"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                  <div className="text-danger">{formik.errors.description}</div>
                )}

                <button type="submit" className="btn btn-success mt-2">
                  {editingId !== null ? "Save Edit" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <UserTable
        storedData={storedData}
        handleEdit={handleEdit}
        editingId={editingId}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default SignUpForm;