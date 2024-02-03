// This is avalble when api is visible 
// import React, { useState } from 'react';
// import './DrugsDisAdvantage.css';

// function DrugsDisAdvantage() {
//   const [userResponse, setUserResponse] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const initialDrugName = 'ExampleDrug';

//   const checkDisadvantage = async () => {
//     const apiUrl = 'YOUR_AI_API_ENDPOINT';

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userInput: userResponse }),
//       });

//       if (!response.ok) {
//         throw new Error('Error fetching data from the API');
//       }

//       const data = await response.json();
//       setFeedback(data.response);
//     } catch (error) {
//       console.error('Error:', error.message);
//       setFeedback('An error occurred while processing the request.');
//     }
//   };

//   return (
//     <div className='bg2'>

//     <div className="drugs-disadvantage-container">
//       <h1>Drug Disadvantage Quiz</h1>
//       <p>Introduce the user to a drug and ask for its disadvantages:</p>
//       <p>Drug Name: {initialDrugName}</p>
//       <label>
//         Your Answer:
//         <input
//           type="text"
//           value={userResponse}
//           onChange={(e) => setUserResponse(e.target.value)}
//           />
//       </label>
//       <button onClick={checkDisadvantage}>Check Disadvantage</button>
//       <p>{feedback}</p>
//     </div>
//           </div>
//   );
// }

// export default DrugsDisAdvantage;
import React, { useState } from 'react';
import './DrugsDisAdvantage.css';

function DrugsDisAdvantage() {
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [showDisadvantages, setShowDisadvantages] = useState(false);

  const initialDrug = {
    name: 'Cocaine',
    disadvantages: ['Addiction', 'Cardiovascular issues', 'Nervous system damage'],
  };

  const drugsData = [
    initialDrug,
    { name: 'Marijuana', disadvantages: ['Impaired memory', 'Psychological dependence'] },
    { name: 'Heroin', disadvantages: ['Addiction', 'Overdose risk', 'Organ damage'] },
    // Add more drugs and disadvantages as needed
  ];

  const checkDisadvantage = () => {
    if (selectedDrug) {
      setShowDisadvantages(true);

      if (selectedDrug.disadvantages.includes(userResponse)) {
        setFeedback('Correct! Your answer is a known disadvantage of the drug.');
      } else {
        setFeedback('Incorrect! Your answer is not a known disadvantage of the drug.');
      }
    } else {
      setFeedback('Please select a drug first.');
    }
  };

  return (
    <div className='bg9'>
      <div className="drugs-disadvantage-container">
        <h1>Drug Disadvantage Quiz</h1>
        <p>Choose a drug and input a disadvantage:</p>
        <label>
          Select a Drug:
          <select onChange={(e) => setSelectedDrug(drugsData.find((drug) => drug.name === e.target.value))}>
            <option value="" disabled selected>Select a drug</option>
            {drugsData.map((drug) => (
              <option key={drug.name} value={drug.name}>
                {drug.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Your Answer:
          <input
            type="text"
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
          />
        </label>
        <button onClick={checkDisadvantage}>Check Disadvantage</button>
        {showDisadvantages && selectedDrug && (
          <div>
            <p>Disadvantages of {selectedDrug.name}:</p>
            <ul>
              {selectedDrug.disadvantages.map((disadvantage, index) => (
                <li key={index}>{disadvantage}</li>
              ))}
            </ul>
          </div>
        )}
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default DrugsDisAdvantage;
