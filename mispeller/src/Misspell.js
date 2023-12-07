import React, { useState } from 'react';
import axios from 'axios';

// InputText will be from TextInputForm because it calls Misspell
const Misspell = ({ inputText }) => {
  const [misspelledText, setMisspelledText] = useState('');
  const [loading, setLoading] = useState(false);

  // Try... catch statement with OpenAI implentation
  const misspellText = async () => {
    try {
      setLoading(true);

      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const endpoint = 'https://api.openai.com/v1/chat/completions';

      const config = {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      };

      // Conditions for ChatGPT
      const data = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that will misspell text, preserving indentation.',
          },
          {
            role: 'user',
            content: `${inputText}`,
          },
        ],
      };

      // Using axios for POST, placing misspelled output into restoredText which is then set as MisspelledText
      const response = await axios.post(endpoint, data, config);
      console.log('Response from OpenAI API:', response.data);

      let restoredText = response.data.choices[0].message.content;
      setMisspelledText(restoredText);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={misspellText}>Submit</button>
          {misspelledText && (
            <div>
              <h2>Mispelled:</h2>
              <textarea
                value={misspelledText}
                readOnly
                style={{
                  width: '55vw',
                  height: '15vh',
                  border: '1px solid #ccc',
                  padding: '10px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-wrap',
                  tabSize: '2',
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Misspell;