import { useState } from "react";


export default function Counter1(){
    const[counter,setCounter] = useState(0);
    return<>
        <h4>Count Value: {counter}</h4>
        <hr />
        <button onClick={()=> setCounter(counter+1)}>Increment</button>
        <button onClick={()=> setCounter(counter-1)}>Decrement</button>
        <button onClick={()=> setCounter(0)}>Reset</button>


    </>
}