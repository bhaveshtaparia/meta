// CustomAlert.js

import React, { useEffect, useState } from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
   useEffect(()=>{
    if(message.length==0){
      setIsOpen(false);
     }else{
      setIsOpen(true);
     }
   },[message])
  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Ensure onClose is a function
  };

  return (
    <div className={`alert ${isOpen ? 'show' : 'hide'}`}>
      <div className='alert alert-success'>
      <span className="closebtn" onClick={handleClose}>&times;</span>
      {message}
      </div>
    </div>
  );
};

export default CustomAlert;
