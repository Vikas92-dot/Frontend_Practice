import React, { useState } from "react";

function AutoBatching() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleClick = () => {
    // Both state updates are batched into a single re-render
    setCount((c) => c + 1);
    setValue("updated");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
export default AutoBatching;
