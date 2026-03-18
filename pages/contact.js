import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { submitContactForm } from "../lib/api";

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create message object with timestamp
      const messageData = {
        ...formData,
        date: new Date().toISOString(),
        id: Date.now().toString(), // Simple unique ID
        read: false,
      };

      // Save to localStorage for admin viewing
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const updatedMessages = [...existingMessages, messageData];
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

      // Log to console for debugging
      console.log("Contact form data:", messageData);

      // Uncomment when Strapi backend is ready
      // await submitContactForm(formData);

      toast({
        title: "Success!",
        description: "We've received your message. We'll get back to you soon.",
        status: "success",
        duration: 5,
        isClosable: true,
      });

      setFormData({ name: "", email: "", city: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        status: "error",
        duration: 5,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="black" color="white" py={{ base: 16, md: 20 }} textAlign="center">
        <Container maxW="4xl">
          <Heading mb={4} fontSize={{ base: "32px", md: "44px" }}>
            Get In Touch
          </Heading>
          <Text fontSize="18px" color="gray.300">
            We'd love to hear about your project and discuss how we can help
          </Text>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={12}
          >
            {/* Contact Information */}
            <VStack align="start" spacing={8}>
              <VStack align="start" spacing={3}>
                <Heading size="lg">Click Interior Solutions</Heading>
                <Text color="gray.600" fontSize="16px">
                  Premium Interior Design Services
                </Text>
              </VStack>

              <VStack align="start" spacing={6} pt={6}>
                {/* Location */}
                <VStack align="start" spacing={2}>
                  <Heading size="sm">📍 Location</Heading>
                  <Text color="gray.700">
                    Bengaluru, India
                  </Text>
                  <Text color="gray.600" fontSize="14px">
                    Serving across India
                  </Text>
                </VStack>

                {/* Contact Info */}
                <VStack align="start" spacing={2}>
                  <Heading size="sm">📧 Email</Heading>
                  <Link href="mailto:info@clickinteriorsolutions.com">
                    <Text color="brand.500" _hover={{ textDecoration: "underline" }}>
                      info@clickinteriorsolutions.com
                    </Text>
                  </Link>
                </VStack>

                {/* Phone */}
                <VStack align="start" spacing={2}>
                  <Heading size="sm">📱 Phone</Heading>
                  <Link href="tel:+919916233566">
                    <Text color="brand.500" _hover={{ textDecoration: "underline" }}>
                      +91 99162 33566
                    </Text>
                  </Link>
                  <Link href="tel:+919886865658">
                    <Text color="brand.500" _hover={{ textDecoration: "underline" }}>
                      +91 98868 65658
                    </Text>
                  </Link>
                </VStack>

                {/* Hours */}
                <VStack align="start" spacing={2}>
                  <Heading size="sm">⏰ Business Hours</Heading>
                  <Text color="gray.700">Monday - Friday: 10:00 AM - 6:00 PM</Text>
                  <Text color="gray.700">Saturday: 10:00 AM - 5:00 PM</Text>
                  <Text color="gray.700">Sunday: Closed</Text>
                </VStack>
              </VStack>
            </VStack>

            {/* Contact Form */}
            <Box
              p={8}
              bg="brand.50"
              borderRadius="lg"
              border="1px solid"
              borderColor="brand.200"
            >
              <Heading mb={4} size="lg">
                Send us a Message
              </Heading>
              
              <Text fontSize="md" color="gray.600" mb={6}>
                We check your messages everyday!
              </Text>

              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  {/* Name */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  {/* Email */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  {/* Phone */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">Phone Number</FormLabel>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  {/* City */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">City</FormLabel>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  {/* Message */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold">Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                    />
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    w="100%"
                    variant="solid"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    size="lg"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12} fontSize={{ base: "28px", md: "36px" }}>
            Frequently Asked Questions
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. A residential project typically takes 3-6 months, while commercial projects may take longer.",
              },
              {
                question: "Do you provide 3D visualizations?",
                answer:
                  "Yes, we provide detailed 3D renderings of your space before execution begins, so you can visualize the final result.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We are based in Bengaluru and serve clients across pan-India through our network of partners and team.",
              },
              {
                question: "Can you work within my budget?",
                answer:
                  "Absolutely! We customize solutions for various budgets and deliver quality within your financial parameters.",
              },
            ].map((faq) => (
              <VStack
                key={faq.question}
                align="start"
                p={6}
                bg="white"
                borderRadius="lg"
                shadow="sm"
              >
                <Heading size="sm">{faq.question}</Heading>
                <Text color="gray.700" fontSize="14px">
                  {faq.answer}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 12, md: 20 }} bg="black" color="white" textAlign="center">
        <Container maxW="4xl">
          <Heading mb={6} fontSize={{ base: "28px", md: "36px" }}>
            Don't Wait, Transform Your Space Today
          </Heading>
          <Text mb={8} fontSize="18px" color="gray.300">
            Schedule a free consultation with our design experts
          </Text>
          <HStack justify="center" spacing={4} flexWrap="wrap">
            <Button
              size="lg"
              bg="brand.500"
              _hover={{ bg: "brand.600" }}
              as="a"
              href="mailto:info@clickinteriorsolutions.com"
            >
              Email Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="brand.500"
              color="brand.500"
              as="a"
              href="tel:+919916233566"
            >
              Call Now
            </Button>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
