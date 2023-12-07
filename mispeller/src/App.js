import React from 'react';
import './App.css'
import TextInputForm from './TextInputForm'
import Explanation from './Explanation';

/* Imports TextInputForm and Explanation Components into one web-app */
function App() {
  return (
    <div className="App">
      <div className="app-content">
        <div className="app-container">
          <TextInputForm />
          <Explanation />
        </div>
      </div>
    </div>
  );
}


export default App;