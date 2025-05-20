import { useState } from "react";

function ControlledComponent(){
    const [value,setValue] = useState('');
    const handleChange = (e)=>{
        setValue(e.target.value);
        console.log(value);
        
    }
    return<>
        <input type="text" value={value} onChange={handleChange}/>
    </>
}
export default ControlledComponent;