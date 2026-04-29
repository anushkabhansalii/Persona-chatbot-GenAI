import React from 'react';

function MessageBubble({ role, content }) {
  return (
    <div className={`message-wrapper ${role}`}>
      <div className={`message-bubble ${role}`}>
        {content.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MessageBubble;
