import { useState } from "react";

const Payment = ({ activeStep, setActiveStep, steps, allData, setAllData }) => {
    const [formData, setFormData] = useState({ mode: '', amount: '' })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value })
        console.log(formData);
    }
    const handleNext = () => {
        setAllData({ ...allData, payment: formData })
        setActiveStep(activeStep + 1);
        console.log("All data:", allData);

    }
    return <>
        <div>
            <form action="">
                <select onChange={handleChange} name="mode">
                    <option value="0">Choose mode</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>

                <label>Amount:</label>
                <input onChange={handleChange} name="amount" value={formData.amount} type="number" placeholder="Enter amount" />

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
    </>
}
export default Payment;