import { useState } from "react";
import Child from "./Child";

function Parent(){
    const[message,setMessage] = useState('');

    const handleDataFromChild = (childData) =>{
        setMessage(childData);
    }
    return<>
        <h2>Parent Component</h2>
        <p>Message from child: {message}</p>
        <Child sendDataToParent={handleDataFromChild} />
    </>
}
export default Parent;