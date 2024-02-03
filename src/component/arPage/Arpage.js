import React from 'react'
import './ArPage.css';
import Imgcard from './Imgcard'
function Arpage() {
  return (
      <div className='set'>
    <Imgcard 
    title={"Marijuana"} hoverText={"marijuana.png"} backSideText={"marijuana.jpg"} 
    />
    <Imgcard 
    title={"Inspired Video"} hoverText={"inspire.png"} backSideText={"cigerate.jpeg"} 
    />
    {/* <Imgcard 
    title={"Cocainepowder"} hoverText={"meth.png"} backSideText={"cocainepowder.jpg"} 
    /> */}
    <Imgcard 
    title={"Meth"} hoverText={"meth.png"} backSideText={"methamphetamine.jpeg"} 
    />
    <Imgcard 
    title={"Cigerate"} hoverText={"cigerate.jpeg"} backSideText={"cigerate.jpeg"} 
    />
      </div>
  )
}

export default Arpage