import React from 'react'

export default function Forms() {
  // Define the logic directly here
  function submitehandler(e) {
    e.preventDefault(); // This is the line that stops the reload!
    console.log("Form submitted");
    alert("Form submitted");
  }

  return (
    <div>
      {/* Pass the function directly */}
      <form onSubmit={submitehandler}> 
        <input type="text" placeholder='Enter your name' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}