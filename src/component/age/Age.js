import React from 'react'
import './age.css'
function Age() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Start");
    }
  return (
    <div className='bg2'>
      <form onSubmit={handleSubmit}>
      <div className='inputs'>
       <input type='number' placeholder='Enter Your Age' />
        <button >Let's  Start</button>
      </div>
    
      
      </form>
    </div>
  )
}

export default Age