import React, { useState } from 'react'
import './age.css'
import { useNavigate } from 'react-router-dom';
function Age() {
  const navigate=useNavigate();
  const [age,setAge]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(age<=14){
          navigate('/Child');
        }else if(age<=40){
          navigate('/Young');
        }else{
          navigate('/Adult');
        }
        // navigate('/demo');
    }
  return (
    <div className='bg2'>
      <form onSubmit={handleSubmit}>
      <div className='inputs'>
       <input type='number' onChange={(e)=>setAge(e.target.value)} required placeholder='Enter Your Age' />
      <button >Let's  Start</button>
      </div>
    
      
      </form>
    </div>
  )
}

export default Age