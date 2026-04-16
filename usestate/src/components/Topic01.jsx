import { useState } from 'react'
import './Topic01.css'
import React from 'react'
{/* This cover all the basic concept of the useState */}
export default function Topic() {
  const [Num, setNum] = useState(10)
  const [Name,setName]= useState("Ali")
  const [array, setarray]= useState([100,200,300,400,500,600,700,800,900,1000])
  
  function chnageNum() {
    setNum(Num + 20)
  }
  function changeName(){
    setName("Abubakar Orakzai")
  }
  function changeArray(){
    setarray([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,12000,13000])
  }

  {/* The Array destructing */}
      const [first, setfirst] = useState([100,200,300,400])

      function changefirst(){
        const newfirst = [...first]
        newfirst[0] = 1000
        setfirst(newfirst)
        newfirst.push("Abubakar Orakzai")
      }
  return (
    <div className='container'>
      <h1>The value of the Num is {Num}</h1>
      <h2>The value of the Name is {Name}</h2>
      <h3>The value of the array is {array}</h3>
      <button onClick={chnageNum}>Change Num</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeArray}>Change Array</button>
      <h1>The value of the first is {first}</h1>
      <button onClick={changefirst}>Change first</button>
    </div>
  )
      }