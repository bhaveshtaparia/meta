// Advice.jsx

import React, { useState, useEffect } from 'react';
import './Advice.css';
import uri from '../../uri';

function Advice() {
  const [adviceList, setAdviceList] = useState([]);
  const [totalCoins, setTotalCoins] = useState(100);
  const [newAdvice, setNewAdvice] = useState({ title: '', description: '' });
  const [expandedIndex, setExpandedIndex] = useState(null);
const handleUpvote=()=>{

}
  useEffect(() => {
    fetch(`${uri}/api/v1/allAdvice`)
      .then((response) => response.json())
      .then((data) => setAdviceList(data.advice))
      .catch((error) => console.error('Error fetching advice:', error));
  }, []); 
  const handleSubmission = () => {
    fetch(`${uri}/api/v1/create/advice`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAdvice),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => console.error('Error submitting advice:', error));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const toggleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div className="bg3">
      <div className="advice-container">
        <div className="advice-posting-section">
      <div className="total-coins">Total Coins: {totalCoins}</div>
            <h2>Post Your Advice</h2>
          <form
            className="submission-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmission();
              setNewAdvice({ title: '', description: '' }); // Reset the form fields after submission
            }}
          >
            <label className="form-label">
              Title:
              <input
                className="form-input"
                type="text"
                name="title"
                value={newAdvice.title}
                onChange={(e) => setNewAdvice({ ...newAdvice, title: e.target.value })}
                required
              />
            </label>
            <label className="form-label">
              Description:
              <textarea
                className="form-input"
                name="description"
                value={newAdvice.description}
                onChange={(e) => setNewAdvice({ ...newAdvice, description: e.target.value })}
                required
              />
            </label>
            <button className="form-button" type="submit">
              Submit Advice
            </button>
          </form>
        </div>

        <div className="visible-advice-section">
          <h1 className="header">Anti-Drugs Advice</h1>

          
          <div>
          {Array.isArray(adviceList) && adviceList.length > 0 ? (
  adviceList.map((advice, index) => (
    <div key={index} className="advice-item">
      <h3>{advice.title}</h3>
      <p>{expandedIndex === index ? advice.description : `${advice.description.slice(0, 100)}...`}</p>
      <div className="advice-details">
        <p>Date: {formatDate(advice.createdAt)}</p>
        <p>Upvotes: {advice.upvote.length}</p>
      </div>
      <div className="advice-buttons">
        <button className="form-button" onClick={() => handleUpvote(index)}>Upvote</button>
        <button className="form-button" onClick={() => toggleReadMore(index)}>
          {expandedIndex === index ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  ))
) : (
  <p>No advice available</p>
)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advice;
