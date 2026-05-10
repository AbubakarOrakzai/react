import React, { useState } from 'react'
import axios from 'axios'
export default function App() {
  const [userdata, setuserdata]=useState([])
  const getdata = async()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
        setuserdata(response.data)
  }
  let printuserdata = "no data"
  if(userdata.length>0)
  {
     printuserdata=(userdata.map (function(elem,index){
  
  return <div>
    <div key={index}>
            <img src={elem.download_url} width='300px' alt="" />
    </div>
    <div>
      <h4>Authore: {elem.author}</h4>
    </div>
    </div>
     
 
     }))}
    
 
  return (
    <div>
      
      
      <button onClick={getdata}>Data
            
      </button>
          {printuserdata}            
    </div>
  )
}
