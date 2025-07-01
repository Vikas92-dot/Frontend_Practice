import { useState } from "react";

const UserDetails = ({ activeStep, setActiveStep, steps, allData, setAllData }) => {
    const [formData, setFormData] = useState({ name: '', contact: '', address: '' })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value })
        console.log(formData);
    }
    const handleNext =()=>{
        setAllData({...allData,userDetails:formData})
        setActiveStep(activeStep + 1);
        console.log("All data:",allData);
        
    }
    return <>
    <div>

    
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",height:"150px",width:"200px",padding:"10px"}}>
            <form >
                <div>

                <label>Name:</label>
                <input onChange={handleChange} name="name" value={formData.name} type="text" placeholder="Enter your name" />
                </div>

                <div>

                <label>Contact:</label>
                <input onChange={handleChange} name="contact" value={formData.contact} type="number" placeholder="Enter your Contact" />
                </div>

                <label>address:</label>
                <input onChange={handleChange} name="address" value={formData.address} type="text" placeholder="Enter your address" />

            </form>
        </div>
        {
            (activeStep !== 0)
            && <button onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
        }
        {
            (activeStep !== steps.length - 1)
            && <button onClick={() => handleNext()} >Next</button>
        }
        </div>
    </>
}
export default UserDetails;