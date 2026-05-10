import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import About from './components/About'

export default function App()
{

     // ================ Api calling ================================
      const [Data, setData] = useState([])
      const Getdata = async() => {
      let response = await axios.get("https://picsum.photos/v2/list")
      console.log(response.data)
      setData(response.data)
      }
      // ====================  useEffect =============================
      useEffect(()=> {
        Getdata()
      },[])
           
      // ====== Props drilling ========================
        const teamMembers = [
  {
    id: 1,
    name: "Ali Khan",
    position: "Frontend Developer",
    department: "Web Development",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    position: "UI/UX Designer",
    department: "Design Team",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Hamza Tariq",
    position: "Backend Developer",
    department: "Server Team",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Ayesha Noor",
    position: "Project Manager",
    department: "Management",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Bilal Hassan",
    position: "Database Engineer",
    department: "Database Team",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
]

     //  ====================== Two way binding =============

    
      const [Value , setValue] = useState("")

      const handle = (e) => {
        e.preventDefault()
        console.log("The default behavious has been remove")
      }
     
       const handleChange = (e) => {
        setValue(e.target.value)
       }
   return (
  <div>
    <Navbar />

     <h1>{`Form data ${Value}`}</h1>
    <form onSubmit={handle}>
      <input 

      onChange={handleChange}
        placeholder='Enter your name'
        value={Value}
      type="text" />
      <button>Submit</button>
    </form>
    
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about">About Team</Link>
    </nav>

    <Routes>
      <Route path="/" element={
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
          {Data.map((item) => (
            <div key={item.id}>
              <h2>{item.author}</h2>
              <img
                style={{ height: "200px", width: "300px", objectFit: "cover" }}
                src={item.download_url}
                alt=""
              />
            </div>
          ))}
        </div>
      } />
      
      <Route path="/about" element={<About teamMembers={teamMembers} />} />
    </Routes>
  </div>
);
}