import { useDeferredValue, useState } from "react";

function SearchResults({ query }) {
    return <p>Displaying results for: {query}</p>;
}
const DeferredValue = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query); 

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return <>
        <input type="text" value={query} onChange={handleChange} />
        <SearchResults query={deferredQuery} />
    </>
}
export default DeferredValue;