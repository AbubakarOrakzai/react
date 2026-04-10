import React from 'react'
import { useState } from 'react'

export default function App() {

  const [first, setfirst] = useState(0)

  function changeNum(){
    setfirst(first + 1);
  }
  return (
    <div>
      <h1>value of num is {first}</h1>
      <button onClick={changeNum}>Click me</button>
    </div>
  )
}
