"use client"

import { useState } from 'react'

export default function Hello() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Hello, world!</h1>
        <p>You clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
  )
}