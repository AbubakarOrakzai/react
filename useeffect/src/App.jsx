import React from 'react'
import './App.css'
import {useState,useEffect} from 'react'
export default function App() {

  const [num, setnum] = useState(1)
   
  const [num2, setnum2] = useState(100)
  useEffect(function(){
    console.log("Use Effect is running")
  },[num2])
  return (
    <div>
      <h1>Hello i am abubakar</h1>
      <h2>num : {num}</h2>
      <h2>num2 : {num2}</h2>
      <div className='container'>
         <button className='btn1' onClick={()=>
        {
            setnum(num+1);
        }
      }>button</button>


      <button className='btn' onClick={()=>{
        setnum2(num2+100)
      }}>num2</button>
      </div>
     
    </div>
  )
}
