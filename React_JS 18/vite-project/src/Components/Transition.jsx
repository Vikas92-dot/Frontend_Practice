import { useTransition } from "react";
import { useState } from "react";

const Transition = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    //mark this update as a transition non-urgent
    startTransition(() => {
      setDisplayValue(e.target.value);
    });
  };
  return ( 
    <>
      <input type="text" value={inputValue} onChange={handleChange}/>
      {isPending && <span>Loading...</span>}
      <p>Search result for: {displayValue}</p>
    </>
  );
};
export default Transition;
