import React from 'react'
import axios from 'axios'
export default function App() {
  
   const getData= async()=>{
   
    {/*
        ====== This is one way of API calling trhough the fetch

      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = response.json
      console.log(data)
  */}

  {/* The is another way axios and it better dealing with errors so we will using this onword*/}
     const [data, setdata] = useState([])
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
     setdata(response.data)
       

    }
 
  return (
    <div>
                <button onClick={getData}>Get data</button>
    </div>
  )
}
