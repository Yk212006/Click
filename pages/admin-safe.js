import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useToast,
  IconButton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, ViewIcon, EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";
import { format } from "date-fns";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR } from "../reducer/Product/Product.type.js";

export default function AdminSafe() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Safe access to Product state with fallback
  const productState = useSelector((state) => state?.ProductReducer || {});
  const { loading: shopLoading, error: shopError } = productState;

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadMessages();
    }
  }, []);

  useEffect(() => {
    // Initialize Product state if needed
    if (!productState.Data) {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: [] });
    }
  }, [productState, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", "true");
        loadMessages();
        toast({
          title: "Login Successful",
          description: "Welcome to admin dashboard",
          status: "success",
          duration: 3,
          isClosable: true,
        });
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid password",
          status: "error",
          duration: 3,
          isClosable: true,
        });
        setPassword("");
      }
      setIsAuthenticating(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setSelectedMessage(null);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
      status: "info",
      duration: 3,
      isClosable: true,
    });
  };

  // Load messages from localStorage on component mount
  const loadMessages = () => {
    try {
      const storedMessages = localStorage.getItem("contactMessages");
      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages.sort((a, b) => new Date(b.date) - new Date(a.date)));
      }
    } catch (error) {
      console.error("Error loading messages:", error);
      dispatch({ type: GET_PRODUCT_ERROR, payload: "Failed to load messages" });
      toast({
        title: "Error",
        description: "Failed to load messages",
        status: "error",
        duration: 3,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMessage = (messageId) => {
    try {
      const updatedMessages = messages.filter(msg => msg.id !== messageId);
      setMessages(updatedMessages);
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
      
      toast({
        title: "Message Deleted",
        description: "The message has been deleted successfully",
        status: "success",
        duration: 3,
        isClosable: true,
      });
      
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      dispatch({ type: GET_PRODUCT_ERROR, payload: "Failed to delete message" });
      toast({
        title: "Error",
        description: "Failed to delete message",
        status: "error",
        duration: 3,
        isClosable: true,
      });
    }
  };

  const markAsRead = (messageId) => {
    try {
      const updatedMessages = messages.map(msg =>
        msg.id === messageId ? { ...msg, read: true } : msg
      );
      setMessages(updatedMessages);
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  // Login form
  if (!isAuthenticated) {
    return (
      <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="md">
          <Box bg="white" p={8} borderRadius="lg" shadow="lg">
            <VStack spacing={6} align="center">
              <LockIcon boxSize={12} color="brand.500" />
              <VStack spacing={2} align="center">
                <Heading size="lg">Admin Login</Heading>
                <Text color="gray.600" textAlign="center">
                  Enter password to access the admin dashboard
                </Text>
              </VStack>

              <form onSubmit={handleLogin} style={{ width: "100%" }}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    isLoading={isAuthenticating}
                    loadingText="Authenticating..."
                    colorScheme="brand"
                    w="full"
                  >
                    Login
                  </Button>
                </VStack>
              </form>

              <Text fontSize="sm" color="gray.500">
                Default password: <Text as="span" fontWeight="bold">admin123</Text>
              </Text>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
        <Text>Loading messages...</Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" shadow="sm" borderBottom="1px" borderColor="gray.200">
        <Container maxW="7xl" py={4}>
          <HStack justify="space-between" align="center">
            <VStack align="start" spacing={1}>
              <Heading size="lg">Admin Dashboard</Heading>
              <Text color="gray.600" fontSize="sm">
                Manage contact form submissions
              </Text>
              {shopError && (
                <Text color="red.500" fontSize="xs">
                  Redux Error: {shopError}
                </Text>
              )}
            </VStack>
            <HStack spacing={4}>
              <Badge colorScheme="red" fontSize="md" px={3} py={1}>
                {unreadCount} Unread
              </Badge>
              <Button onClick={loadMessages} variant="outline" size="sm">
                Refresh
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm" colorScheme="red">
                Logout
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="7xl" py={8}>
        {messages.length === 0 ? (
          <Alert status="info" borderRadius="lg">
            <AlertIcon />
            <AlertTitle>No Messages</AlertTitle>
            <AlertDescription>
              No contact form submissions yet. When users submit the contact form, messages will appear here.
            </AlertDescription>
          </Alert>
        ) : (
          <VStack spacing={6} align="stretch">
            {/* Messages Table */}
            <Box bg="white" borderRadius="lg" shadow="sm" overflow="hidden">
              <Box p={6} borderBottom="1px" borderColor="gray.200">
                <Heading size="md">Contact Messages ({messages.length})</Heading>
              </Box>
              
              <Box overflowX="auto">
                <Table variant="simple">
                  <Thead bg="gray.50">
                    <Tr>
                      <Th>Status</Th>
                      <Th>Date</Th>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>City</Th>
                      <Th>Message</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {messages.map((message) => (
                      <Tr 
                        key={message.id}
                        bg={!message.read ? "blue.50" : "white"}
                        _hover={{ bg: "gray.50" }}
                        cursor="pointer"
                        onClick={() => {
                          setSelectedMessage(message);
                          if (!message.read) {
                            markAsRead(message.id);
                          }
                        }}
                      >
                        <Td>
                          {!message.read && (
                            <Badge colorScheme="red" fontSize="xs">New</Badge>
                          )}
                        </Td>
                        <Td>
                          <VStack align="start" spacing={0}>
                            <Text fontSize="sm" fontWeight="medium">
                              {format(new Date(message.date), "MMM dd, yyyy")}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              {format(new Date(message.date), "HH:mm")}
                            </Text>
                          </VStack>
                        </Td>
                        <Td fontWeight="medium">{message.name}</Td>
                        <Td>
                          <HStack spacing={2}>
                            <EmailIcon boxSize={4} color="gray.400" />
                            <Text fontSize="sm">{message.email}</Text>
                          </HStack>
                        </Td>
                        <Td>{message.city}</Td>
                        <Td maxW="300px">
                          <Text noOfLines={2} fontSize="sm">
                            {message.message}
                          </Text>
                        </Td>
                        <Td>
                          <HStack spacing={2}>
                            <IconButton
                              icon={<ViewIcon />}
                              size="sm"
                              variant="ghost"
                              colorScheme="blue"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMessage(message);
                                if (!message.read) {
                                  markAsRead(message.id);
                                }
                              }}
                              aria-label="View message"
                            />
                            <IconButton
                              icon={<DeleteIcon />}
                              size="sm"
                              variant="ghost"
                              colorScheme="red"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteMessage(message.id);
                              }}
                              aria-label="Delete message"
                            />
                          </HStack>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>

            {/* Message Detail Modal/Panel */}
            {selectedMessage && (
              <Box bg="white" borderRadius="lg" shadow="sm" p={6}>
                <HStack justify="space-between" align="start" mb={6}>
                  <VStack align="start" spacing={2}>
                    <Heading size="md">Message Details</Heading>
                    <Text color="gray.600" fontSize="sm">
                      {format(new Date(selectedMessage.date), "PPP 'at' p")}
                    </Text>
                  </VStack>
                  <Button
                    onClick={() => setSelectedMessage(null)}
                    variant="ghost"
                    size="sm"
                  >
                    Close
                  </Button>
                </HStack>

                <VStack spacing={4} align="stretch">
                  <HStack spacing={6}>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" color="gray.600">Name</Text>
                      <Text fontWeight="medium">{selectedMessage.name}</Text>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" color="gray.600">Email</Text>
                      <HStack spacing={2}>
                        <EmailIcon boxSize={4} color="gray.400" />
                        <Text>{selectedMessage.email}</Text>
                      </HStack>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" color="gray.600">City</Text>
                      <Text>{selectedMessage.city}</Text>
                    </VStack>
                  </HStack>

                  <Box>
                    <Text fontSize="sm" color="gray.600" mb={2}>Message</Text>
                    <Box 
                      p={4} 
                      bg="gray.50" 
                      borderRadius="md" 
                      borderLeft="4px" 
                      borderLeftColor="brand.500"
                    >
                      <Text whiteSpace="pre-wrap">{selectedMessage.message}</Text>
                    </Box>
                  </Box>

                  <HStack spacing={4} pt={4}>
                    <Button
                      as="a"
                      href={`mailto:${selectedMessage.email}`}
                      leftIcon={<EmailIcon />}
                      colorScheme="blue"
                      size="sm"
                    >
                      Reply via Email
                    </Button>
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                      onClick={() => deleteMessage(selectedMessage.id)}
                    >
                      Delete Message
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            )}
          </VStack>
        )}
      </Container>
    </Box>
  );
}
