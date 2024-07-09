import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
            <button 
              key={button} 
              onClick={() => handleButtonClick(button)}
              className={button === '=' ? 'equalButton' : button === 'C' ? 'clearButton' : ''}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
