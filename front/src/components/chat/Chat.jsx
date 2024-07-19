import React, { useRef, useEffect } from 'react';
import './chat.css';

function Chat({ history, celibrityChoice }) {
  const chatContainerRef = useRef(null);
  console.log(celibrityChoice, "ici");
  useEffect(() => {
    // Scroll to bottom of chat container with smooth behavior
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history]); // Scroll when history changes

  return (
    <section ref={chatContainerRef} className='chat-container'>
      {history.map((entry, index) => (
        <div key={index} className={entry.role === "user" ? "user-message" : "assistant-message"} style={{ margin: '10px 0' }}>
          <strong>{entry.role === "user" ? entry.role : celibrityChoice}:</strong> {entry.content}
        </div>
      ))}
    </section>
  );
}

export default Chat;
