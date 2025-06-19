'use client';

import { useState } from 'react';

export default function TestHandler() {
  const [response, setResponse] = useState(null);

  const callHandler = async (method) => {
    try {
      const res = await fetch('/api/users', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(method === 'POST' || method === 'PUT' 
          ? { body: JSON.stringify({ name: 'John Doe' }) } 
          : {}),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div>
    <h1>Test Route Handlers</h1>
    <div>
        <button onClick={() => callHandler('GET')}>GET</button>
        <button onClick={() => callHandler('POST')}>POST</button>
        <button onClick={() => callHandler('PUT')}>PUT</button>
        <button onClick={() => callHandler('DELETE')}>DELETE</button>
    </div>

    <div>
        <h2>Response:</h2>
        <pre>
        {response ? JSON.stringify(response, null, 2) : 'No response yet'}
        </pre>
    </div>
    </div>
  );
}