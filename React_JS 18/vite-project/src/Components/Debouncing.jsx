import { useEffect, useState } from "react"

export const useDebounce = (value,delay)=>{
    const[debouncedValue,setDebouncedValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
                setDebouncedValue(value);
        },delay);

        return()=>{
            clearTimeout(handler);
        }
    },[value,delay]);

    return debouncedValue;
}

const Debouncing=()=>{
    const[searchTerm,setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(()=>{
        if(debouncedSearchTerm){
            console.log('Searching for:',debouncedSearchTerm);
        }
    },[debouncedSearchTerm]);

    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
    }
    return<>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} name="" id="" />
    </>
}
export default Debouncing;