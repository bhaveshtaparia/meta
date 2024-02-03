import React from 'react';
import './imgcard.css'
import { Link } from 'react-router-dom'
const CustomCard = ({ title, hoverText, backSideText }) => {
  return (
    <div className="cardContainer">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">{title}</p>
            <img  width={150} height={150} src={require(`../../images/qr/${hoverText}`)} alt='hoverText'/>
          </div>
          <div className="backSide">
            {/* <p className="title">{backSideTitle}</p> */}
            <img width={450} height={450} style={{borderRadius:"20px"}} src={require(`../../images/marker/${backSideText}`)} alt='Qr'/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default CustomCard;
