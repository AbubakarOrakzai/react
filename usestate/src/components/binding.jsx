import React from 'react'
import { useState } from 'react'

export default function binding() {
    const [first, setfirst] = useState(" ")

    const handler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted by ", first)
        setfirst(" ");
    }
  return (
    <div>
      <form onSubmit={handler}>
        <input type="text"
        placeholder='Enter you name '
        value={first}
        onChange={(e) => {
            setfirst(e.target.value)
            console.log(e.target.value)
        } 
        }/>
        <button>submit</button>
      </form>
    </div>
  )
}
