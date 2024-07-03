import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    setWelcomeMessage(data.message);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}>Submit</button>
      </form>
      {welcomeMessage && <h2 style={{ marginTop: '20px' }}>{welcomeMessage}</h2>}
    </div>
  );
}

export default App;
