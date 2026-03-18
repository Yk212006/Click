import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function HomeTest() {
  return (
    <Container maxW="4xl" py={8}>
      <Box textAlign="center" py={20}>
        <Heading size="2xl" mb={4}>Home Interior Design</Heading>
        <Text fontSize="xl" mb={8}>
          Transform your space with our professional interior design services
        </Text>
        
        <Box spacing={4}>
          <Link href="/contact" passHref>
            <Button as="a" colorScheme="blue" size="lg" mr={4}>
              Contact Us
            </Button>
          </Link>
          
          <Link href="/simple-test" passHref>
            <Button as="a" variant="outline" size="lg">
              Test Admin
            </Button>
          </Link>
        </Box>
        
        <Box mt={12} p={8} bg="gray.50" borderRadius="lg">
          <Heading size="lg" mb={4}>Welcome to Our Website</Heading>
          <Text>
            This is a test page to verify the website is working properly. 
            If you can see this page, the basic functionality is working.
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
