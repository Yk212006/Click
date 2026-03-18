import { useState, useEffect } from 'react';

export default function SimpleTest() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('contactMessages');
      if (stored) {
        const parsed = JSON.parse(stored);
        setMessages(parsed);
        setStatus(`Found ${parsed.length} messages`);
      } else {
        setStatus('No messages found');
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  }, []);

  const addTest = () => {
    const testMsg = {
      id: Date.now().toString(),
      name: 'Test User',
      email: 'test@example.com',
      city: 'Test City',
      message: 'Test message',
      date: new Date().toISOString(),
      read: false
    };

    try {
      const existing = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      const updated = [...existing, testMsg];
      localStorage.setItem('contactMessages', JSON.stringify(updated));
      setMessages(updated);
      setStatus(`Added test. Total: ${updated.length}`);
    } catch (error) {
      setStatus(`Error adding: ${error.message}`);
    }
  };

  const clearAll = () => {
    try {
      localStorage.setItem('contactMessages', JSON.stringify([]));
      setMessages([]);
      setStatus('Cleared all messages');
    } catch (error) {
      setStatus(`Error clearing: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Admin Test</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h3>Status: {status}</h3>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={addTest} style={{ marginRight: '10px', padding: '10px' }}>
          Add Test Message
        </button>
        <button onClick={clearAll} style={{ padding: '10px' }}>
          Clear All
        </button>
      </div>

      <div>
        <h3>Messages ({messages.length})</h3>
        {messages.map(msg => (
          <div key={msg.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            marginBottom: '10px',
            backgroundColor: msg.read ? '#fff' : '#e6f3ff'
          }}>
            <strong>{msg.name}</strong> ({msg.email}) - {msg.city}
            <br />
            <small>{new Date(msg.date).toLocaleString()}</small>
            <br />
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}
