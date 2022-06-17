import React from 'react'
import './Home.css'

function Home() {
    
    const getuserArr=JSON.stringify(localStorage.getItem("user"));
     console.log( getuserArr);
     
  return (
    <div className='home'>Home
    <div className='display'>
        { getuserArr}
    </div>
    </div>
    
   
  )
}

export default Home