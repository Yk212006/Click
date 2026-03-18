import { useState, useEffect } from "react";
import { Box, Text, Button, Container, Input, FormControl, FormLabel } from "@chakra-ui/react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [idleTimer, setIdleTimer] = useState(null);

  const ADMIN_PASSWORD = "Click@6666";
  const IDLE_TIMEOUT = 30000; // 30 seconds in milliseconds

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadMessages();
    }
  }, []);

  // Auto-logout functionality
  useEffect(() => {
    if (!isAuthenticated) return;

    const resetIdleTimer = () => {
      if (idleTimer) clearTimeout(idleTimer);
      const newTimer = setTimeout(() => {
        handleLogout();
        alert("You have been logged out due to inactivity.");
      }, IDLE_TIMEOUT);
      setIdleTimer(newTimer);
    };

    const handleActivity = (event) => {
      // Don't reset timer if user is typing in password field
      if (event.target && event.target.type === 'password') {
        return;
      }
      resetIdleTimer();
    };

    const handlePageLeave = () => {
      handleLogout();
    };

    // Set up event listeners
    const events = ['mousedown', 'mousemove', 'scroll', 'touchstart'];
    events.forEach(event => document.addEventListener(event, handleActivity));
    
    // Add keyboard events but exclude password field
    const handleKeyboard = (event) => {
      if (event.target && event.target.type !== 'password') {
        resetIdleTimer();
      }
    };
    document.addEventListener('keypress', handleKeyboard);
    
    window.addEventListener('beforeunload', handlePageLeave);
    
    // Initial timer setup
    resetIdleTimer();

    // Cleanup
    return () => {
      events.forEach(event => document.removeEventListener(event, handleActivity));
      document.removeEventListener('keypress', handleKeyboard);
      window.removeEventListener('beforeunload', handlePageLeave);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [isAuthenticated, idleTimer]);

  const loadMessages = () => {
    try {
      const storedMessages = localStorage.getItem("contactMessages");
      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages.sort((a, b) => new Date(b.date) - new Date(a.date)));
      }
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      loadMessages();
    } else {
      alert("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setSelectedMessage(null);
    setPassword(""); // Clear password field
  };

  const deleteMessage = (messageId) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const markAsRead = (messageId) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  const addTestMessage = () => {
    const testMessage = {
      id: Date.now().toString(),
      name: "Test User",
      email: "test@example.com",
      city: "Test City",
      message: "This is a test message to verify the admin dashboard works.",
      date: new Date().toISOString(),
      read: false,
    };

    const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const updatedMessages = [...existingMessages, testMessage];
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderBottom: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Container maxW="1200px">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div>
              <h1 style={{ margin: 0, color: '#333', fontSize: '24px' }}>
                Admin Dashboard
              </h1>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                Manage contact form submissions
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ 
                backgroundColor: '#dc3545', 
                color: 'white', 
                padding: '5px 10px', 
                borderRadius: '15px', 
                fontSize: '12px' 
              }}>
                {messages.filter(msg => !msg.read).length} Unread
              </span>
              <button
                onClick={loadMessages}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Refresh
              </button>
              <button
                onClick={addTestMessage}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Test Message
              </button>
              <button
                onClick={handleLogout}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container maxW="1200px" py={8}>
        {messages.length === 0 ? (
          <div style={{ 
            backgroundColor: 'white', 
            padding: '40px', 
            borderRadius: '10px', 
            textAlign: 'center',
            border: '1px solid #ddd'
          }}>
            <h3 style={{ color: '#666', marginBottom: '10px' }}>No Messages</h3>
            <p style={{ color: '#999' }}>
              No contact form submissions yet. Submit the contact form to see messages here.
            </p>
            <button
              onClick={addTestMessage}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Add Test Message
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Messages List */}
            <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>
                Messages ({messages.length})
              </h3>
              <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => {
                      setSelectedMessage(message);
                      if (!message.read) {
                        markAsRead(message.id);
                      }
                    }}
                    style={{
                      padding: '15px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      cursor: 'pointer',
                      backgroundColor: message.read ? '#f9f9f9' : '#e3f2fd',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                          {message.name}
                        </div>
                        <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                          {message.email}
                        </div>
                        <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                          {message.city}
                        </div>
                        <div style={{ fontSize: '12px', color: '#999' }}>
                          {new Date(message.date).toLocaleString()}
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {!message.read && (
                          <span style={{ 
                            backgroundColor: '#dc3545', 
                            color: 'white', 
                            padding: '2px 8px', 
                            borderRadius: '10px', 
                            fontSize: '10px' 
                          }}>
                            New
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMessage(message.id);
                          }}
                          style={{
                            padding: '4px 8px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
                      {message.message.substring(0, 100)}{message.message.length > 100 ? '...' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Detail */}
            <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
              {selectedMessage ? (
                <div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ color: '#333', margin: 0 }}>Message Details</h3>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Close
                    </button>
                  </div>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>Name:</strong> {selectedMessage.name}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>Email:</strong> {selectedMessage.email}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>Phone:</strong> {selectedMessage.phone || 'Not provided'}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>City:</strong> {selectedMessage.city}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>Date:</strong> {new Date(selectedMessage.date).toLocaleString()}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>Status:</strong> {selectedMessage.read ? 'Read' : 'Unread'}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <strong>Message:</strong>
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '5px',
                      marginTop: '10px',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {selectedMessage.message}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        display: 'inline-block'
                      }}
                    >
                      Reply via Email
                    </a>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      Delete Message
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  color: '#666', 
                  padding: '40px 0' 
                }}>
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
