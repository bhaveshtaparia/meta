import React, { useState } from 'react';
import './DrugsDisAdvantage.css';

function DrugsDisAdvantage() {
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState('');

  const initialDrugName = 'ExampleDrug';

  const checkDisadvantage = async () => {
    const apiUrl = 'YOUR_AI_API_ENDPOINT';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: userResponse }),
      });

      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }

      const data = await response.json();
      setFeedback(data.response);
    } catch (error) {
      console.error('Error:', error.message);
      setFeedback('An error occurred while processing the request.');
    }
  };

  return (
    <div className='bg2'>

    <div className="drugs-disadvantage-container">
      <h1>Drug Disadvantage Quiz</h1>
      <p>Introduce the user to a drug and ask for its disadvantages:</p>
      <p>Drug Name: {initialDrugName}</p>
      <label>
        Your Answer:
        <input
          type="text"
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          />
      </label>
      <button onClick={checkDisadvantage}>Check Disadvantage</button>
      <p>{feedback}</p>
    </div>
          </div>
  );
}

export default DrugsDisAdvantage;
