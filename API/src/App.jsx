import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function App() {

  /*
    =====================================================
    📌 Function: getData
    📌 Purpose: Fetch data from API using Axios
    =====================================================
  */
 
    /* The below code is to get the image data*/

    
     const [data, setdata] = useState([])

   const getData = async()=>{
      
    const response = await axios.get("https://picsum.photos/v2/list")

      
    setdata(response.data)
    console.log(data)
   }

  /*
    =====================================================
    📌 Alternative Method (Fetch API)
    =====================================================
    
    const getDataUsingFetch = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list")

        // Convert response to JSON manually
        const data = await response.json()

        console.log(data)

      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
  */

  return (
    <div>
      {/* Button to trigger API call */}
      <button onClick={getData}>Get Data</button>
      <div> 
        {data.map(function(elem,index){
               return <h3>hello {elem.author} {index}</h3>
        })}
      </div>
    </div>
  )
}