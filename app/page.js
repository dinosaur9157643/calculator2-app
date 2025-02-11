'use client';

import { useState } from 'react';
import './calculator.css'; 

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="calculator-screen" />
        <div className="calculator-buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === "=" ? handleCalculate() : handleClick(char))}
              className="calculator-button"
            >
              {char}
            </button>
          ))}
          <button onClick={handleClear} className="calculator-clear">CLEAR</button>
        </div>
      </div>
    </div>
  );
}
