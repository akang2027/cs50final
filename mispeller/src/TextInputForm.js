import React, { useState } from 'react';
import Misspell from './Misspell';
import './TextInputForm.css';

// Using input from form and useStates from react hook statements
const TextInputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [misspelledText, setMisspelledText] = useState(''); // Define misspelledText state

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // When submit is clicked, prevents default of page reload and allows misspelled text to replace
  const handleSubmit = (event) => {
    event.preventDefault();
    setMisspelledText(inputValue);
  };

  return (
    <div>
      <h1>mispeller</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <br></br>
          enter text:
          <br></br>
          <br></br>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: '55vw', height: '15vh' }}
          />
        </label>
        <br></br>
      </form>
      {// Make sure that there is some input before calling Misspell
      inputValue.trim() !== '' && (
        <Misspell inputText={inputValue} misspelledText={misspelledText} />    
      )}
      </div>
  );
};

export default TextInputForm;
