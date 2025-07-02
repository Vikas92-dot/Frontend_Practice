import React from "react";

function ResultList({ results }) {
  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ResultList;