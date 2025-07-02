import React, { useState, startTransition, useDeferredValue } from "react";
import ResultList from "./ResultList";
import { useId } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const id = useId();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const data = dummyData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(data);
    });
  };

  const deferredValue = useDeferredValue(filtered);

  return (
    <div>
      <label htmlFor={id}>Search:</label>
      <input id={id} type="text" value={query} onChange={handleChange} />
      <ResultList results={deferredValue} />
    </div>
  );
}

const dummyData = [
  "React", "Angular", "Vue", "Next.js", "Node.js",
  "Express", "MongoDB", "Java", "Spring Boot", "Python"
];

export default Search;
