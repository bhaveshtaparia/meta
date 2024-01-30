import React, { useState, useEffect } from 'react';
import './intro.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const arr1 = ['first.jpeg', 'second.jpeg', 'third.jpeg', 'last.jpeg'];
  const arr2 = [
    'He has been hospitalized due to the excessive use of drugs.',
    'So, his family aims to facilitate his recovery from this situation.',
    'Now, your assistance is needed to aid that individual in their recovery from this situation.',
    'Can you restore smiles to him and his family?',
  ];

  const [isImageChanged, setIsImageChanged] = useState(arr1[0]);
  const [isTextChanged, setIsTextChanged] = useState(arr2[0]);
  const [timer, setTimer] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        if (timer >= 4) {
          setTimer(1);
          navigate('/age');
        } else {
          setTimer((prevTimer) => prevTimer + 1);
          setIsImageChanged(arr1[timer]);
          setIsTextChanged(arr2[timer]);
        }
      }, 2000); // Change the delay (in milliseconds) according to your preference
    }

    return () => clearInterval(interval);
  }, [autoPlay, timer, navigate,arr1,arr2]);

  const handleChange = () => {
    if (timer >= 4) {
      setTimer(1);
      navigate('/age');
    } else {
      setTimer((prevTimer) => prevTimer + 1);
      setIsImageChanged(arr1[timer]);
      setIsTextChanged(arr2[timer]);
    }
  };

  const handleSkip = () => {
    setAutoPlay(false); // Stop auto-play when skip is clicked
    navigate('/age');
  };

  return (
    <div className="bg">
      <div className="app-container">
        <p className="text">{isTextChanged}</p>
        <img
          src={require(`../../images/${isImageChanged}`)}
          alt="Displayed"
          className="image"
        />
      </div>
      <div className='btn'>
        <button onClick={handleChange}>Next</button>
        <button onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
};

export default Intro;
