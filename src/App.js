import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');
  const fullName = 'Kodai Kato - IT3A';

  const items = [
    'Being On Time',
    'Making An Effort',
    'Being High Energy',
    'Having A Positive Attitude',
    'Being Passionate',
    'Using Good Body Language',
    'Being Coachable',
    'Doing A Little Extra',
    'Being Prepared',
    'Having A Strong Work Ethic',
  ];

  const handleKeyPress = (key) => {
    if (key === 'RESET') {
      setDisplay('10 Things That Require Zero Talent');
    } else if (key === 'NAME') {
      setDisplay(fullName.toUpperCase());
    } else {
      const index = parseInt(key, 10) - 1; 
      if (index >= 0 && index < items.length) {
        setDisplay(`${index + 1} - ${items[index]}`);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{fullName}</h1>
      </header>
      <h2>{display}</h2>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'RESET', 'NAME'].map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;