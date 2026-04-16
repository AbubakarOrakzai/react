import React from 'react'
import './App.css'

export default function App() {
  function Abubakar(){
    console.log("Abubakar")
  }
  function mouseenter(){
    console.log("Mouse Entered")
  }
  function chaning(){
    console.log("Input field is changing")
  }
  return (
    <div>
      <button onMouseEnter={mouseenter}  onClick={Abubakar}>Click me</button>
      <input onChange={chaning} type="text" placeholder="Enter text here..." />

      <input onChange={function(elem){
        console.log(elem.target.value)
      }
      } type="text" placeholder="Enter text here..." />
    </div>
  )
}
