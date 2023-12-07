import React from 'react';

function Explanation() {
  /* Add brief styling for the explanation */
  const explanationStyles = {
    'padding-left': '80px',
    'padding-top': '20px'
  };

  return (
    <div className="explanation" style={explanationStyles}>
      <p>Fer CS50.</p>
      <br />
      <p>mispellr, quite simply, misspells words. Enter or paste a text into the box, and the program will misspell it for you using OpenAI. To misspell is to commit a grave error, to overlook, to offend. Your teacher takes off points for misspellings. You point them out in her emails. Who dares to transgress? Who dares to misspell? 
      <br /><br />
      But through misspellings, we can undermine texts' canonical authority and approach literature irreverently, without forged sobriety—as we read to enjoy. Misspellings make us examine the semantic connections between letters and words, tones and voices. What do these misspellings provoke? What surprises you? 
      <br /><br />
      By destabilizing our reading experience, misspellings allow us to question our normative understandings of what a text can be. There is a tradition of misspellings, both poetic and political. Outkast writes, “We Love Deez Hoez”. In “Dawn 2040,” Jorie Graham innovates, “as I admire yr breathing / wherever u are now / reading this.” Let yr typos be. Misspellings are subversive. Misspellings are evryday. 
      </p>
    </div>
  );
}

export default Explanation;