import React from 'react';
import './gameType.css'
import { Link } from 'react-router-dom'
const CustomCard = ({ title, hoverText, backSideTitle, backSideText, playLink }) => {
  return (
    <div className="cardContainer">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">{title}</p>
            <p>{hoverText}</p>
          </div>
          <div className="backSide">
            <p className="title">{backSideTitle}</p>
            <p>{backSideText}</p>
          </div>
        </div>
        
      </div>
      <Link to={playLink} className="playButton">Play</Link>
    </div>
  );
}

export default CustomCard;
