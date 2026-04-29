import React from 'react';

function SuggestionChips({ suggestions, onSelect }) {
  return (
    <div className="suggestion-chips">
      {suggestions.map((text, idx) => (
        <div key={idx} className="chip" onClick={() => onSelect(text)}>
          {text}
        </div>
      ))}
    </div>
  );
}

export default SuggestionChips;
