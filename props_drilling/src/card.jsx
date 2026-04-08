import React from 'react'
import { Bookmark } from 'lucide-react'
import
function App() {
  return (
    <div className="parent">
      <div className="card">

        <div className="top">
          <img 
            src="https://logo.clearbit.com/amazon.com" 
            alt="Amazon logo" 
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>

          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Lahore, Pakistan</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default App