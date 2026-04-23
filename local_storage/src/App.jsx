import React from 'react'

export default function App() {

  {/* The below code is used to set the value to the local storage*/}
  const user = localStorage.setItem('user','Abubakar Orakzai')
  const age = localStorage.setItem('age', 25)

  {/* The below code is used to get the value from the local storage*/

    localStorage.getItem('user')
    localStorage.getItem('age')

    {/* The below code is to remove the value from the local storage*/}
    localStorage.removeItem('user')
    localStorage.removeItem('age')

    {/* The below code is to clear the local storage*/}
    localStorage.clear()

    const Abubakar = {
      lastname: 'orakzai',
      age : 21,
      height : 5.7,
      location : 'lahore'
    }

     localStorage.setItem('name',JSON.stringify(Abubakar))
  }

  console.log(user)
  return (
    <div>
     <h1>
      hi {user}
     </h1>
    </div>
  )
}
