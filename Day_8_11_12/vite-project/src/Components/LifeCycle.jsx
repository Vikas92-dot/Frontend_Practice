import { useEffect, useState } from "react";

function LifeCycle(){
    const[count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted.");
        return ()=>{
            console.log("Component will unmount");
        }
    },[])

    useEffect(()=>{
        if(count > 0){
            console.log("Component will update");
        }
    },[count])  
    return<>
        <h4>Count Value:{count}</h4>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </>
}
export default LifeCycle;