import React from 'react';
import './gameType.css'

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
      <a href={playLink} className="playButton">Play</a>
    </div>
  );
}

export default CustomCard;
