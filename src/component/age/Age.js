import React from 'react'
import './age.css'
import { useNavigate } from 'react-router-dom';
function Age() {
  const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/demo');
    }
  return (
    <div className='bg2'>
      <form onSubmit={handleSubmit}>
      <div className='inputs'>
       <input type='number' required placeholder='Enter Your Age' />
        <button >Let's  Start</button>
      </div>
    
      
      </form>
    </div>
  )
}

export default Age