import { useEffect, useRef, useState } from "react";

export default function AbortExample() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const abortControllerRef = useRef(null);

  const fetchData = () => {
    // Abort any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setFetching(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.slice(0, 5)); // show only first 5 posts
        setFetching(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
        }
        setFetching(false);
      });
  };

  return (
    <div>
      <h2>AbortController Demo</h2>
      <button onClick={fetchData}>Fetch Posts</button>
      <button onClick={() => abortControllerRef.current?.abort()}>Cancel Request</button>

      {fetching && <p>Loading...</p>}

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}. {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}