import { useState, useEffect } from "react";
import { Box, Text, Button, Container } from "@chakra-ui/react";

export default function AdminTest() {
  const [messages, setMessages] = useState([]);
  const [testData, setTestData] = useState("");

  useEffect(() => {
    // Load existing messages
    try {
      const storedMessages = localStorage.getItem("contactMessages");
      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
        setTestData(`Found ${parsedMessages.length} messages in localStorage`);
      } else {
        setTestData("No messages found in localStorage");
      }
    } catch (error) {
      setTestData(`Error loading messages: ${error.message}`);
    }
  }, []);

  const addTestMessage = () => {
    const testMessage = {
      id: Date.now().toString(),
      name: "Test User",
      email: "test@example.com",
      city: "Test City",
      message: "This is a test message to verify the admin dashboard works properly.",
      date: new Date().toISOString(),
      read: false,
    };

    try {
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const updatedMessages = [...existingMessages, testMessage];
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      setTestData(`Added test message. Total messages: ${updatedMessages.length}`);
    } catch (error) {
      setTestData(`Error adding test message: ${error.message}`);
    }
  };

  const clearMessages = () => {
    try {
      localStorage.setItem("contactMessages", JSON.stringify([]));
      setMessages([]);
      setTestData("Cleared all messages");
    } catch (error) {
      setTestData(`Error clearing messages: ${error.message}`);
    }
  };

  return (
    <Container maxW="4xl" py={8}>
      <Box bg="white" p={8} borderRadius="lg" shadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Admin Dashboard Test</Text>
        
        <Box mb={6}>
          <Text fontSize="lg" fontWeight="medium" mb={2}>Status:</Text>
          <Text color="blue.600">{testData}</Text>
        </Box>

        <Box mb={6}>
          <Text fontSize="lg" fontWeight="medium" mb={2}>Messages in localStorage:</Text>
          {messages.length > 0 ? (
            <Box>
              <Text>Total messages: {messages.length}</Text>
              {messages.map((msg, index) => (
                <Box key={msg.id} p={3} bg="gray.50" borderRadius="md" mb={2}>
                  <Text fontWeight="medium">{msg.name} - {msg.email}</Text>
                  <Text fontSize="sm" color="gray.600">{msg.city}</Text>
                  <Text fontSize="sm">{msg.message}</Text>
                  <Text fontSize="xs" color="gray.500">{new Date(msg.date).toLocaleString()}</Text>
                </Box>
              ))}
            </Box>
          ) : (
            <Text color="gray.500">No messages found</Text>
          )}
        </Box>

        <Box>
          <Button onClick={addTestMessage} mr={4} colorScheme="blue">
            Add Test Message
          </Button>
          <Button onClick={clearMessages} colorScheme="red">
            Clear All Messages
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
