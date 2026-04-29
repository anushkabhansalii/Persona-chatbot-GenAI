import React, { useState } from 'react';
import PersonaSelector from './components/PersonaSelector';
import ChatPage from './pages/ChatPage';

function App() {
  const [selectedPersona, setSelectedPersona] = useState(null);

  return (
    <div className="app-container">
      {!selectedPersona ? (
        <PersonaSelector onSelect={setSelectedPersona} />
      ) : (
        <ChatPage 
          persona={selectedPersona} 
          onSwitchPersona={() => setSelectedPersona(null)} 
        />
      )}
    </div>
  );
}

export default App;
