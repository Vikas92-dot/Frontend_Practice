import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debouncedValue;
}
const DebouncedSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        const fetchData = async () => {
            if (!debouncedSearchTerm) {
                setResults([]);
                return;
            }
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();

                const filtered = data.filter((user) => (
                    user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
                ));
                setResults(filtered);
            } catch (error) {
                console.log("Error fetching user:", error);
            }
        }
        fetchData();
    }, [debouncedSearchTerm])

    return <>
        <div>
            <h2>Search Users (Debounced)</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px', width: "250px", fontSize: "16px" }}
            />
            <ul>
                {results.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    </>
}
export default DebouncedSearch;