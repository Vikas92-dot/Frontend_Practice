import { useRef } from "react";

function Uncontrolled (){
    const inputRef = useRef(null);

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        
        alert("Value: "+inputRef.current.value);
        
    }
    return<>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
    </>
}
export default Uncontrolled;