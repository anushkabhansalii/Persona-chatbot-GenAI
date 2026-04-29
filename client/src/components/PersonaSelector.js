import React from 'react';

const personas = [
  {
    id: 'anshuman',
    name: 'Anshuman Singh',
    description: 'Co-founder of Scaler Academy. Direct, strict, focuses on discipline and execution over theory.'
  },
  {
    id: 'abhimanyu',
    name: 'Abhimanyu Saxena',
    description: 'Co-founder of Scaler. Strategic thinker, focuses on long-term vision and product thinking.'
  },
  {
    id: 'kshitij',
    name: 'Kshitij Mishra',
    description: 'Educator. Simplifies complex topics, friendly, encouraging and breaks down concepts clearly.'
  }
];

function PersonaSelector({ onSelect }) {
  return (
    <div className="persona-selector-container">
      <h1>Select your Mentor</h1>
      <div className="cards-container">
        {personas.map((p) => (
          <div 
            key={p.id} 
            className="persona-card"
            onClick={() => onSelect(p.id)}
          >
            <h2>{p.name}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonaSelector;
