import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "brand.500",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Contact Info */}
          <Stack spacing={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={4} color="brand.500">
                Get In Touch
              </Text>
              
              <Stack spacing={3}>
                {/* Phone */}
                <Stack direction="column" align="start" spacing={3}>
                  <Stack direction="row" align="center" spacing={3}>
                    <FaPhone size={20} color="#1E7F3C" />
                    <Text fontWeight="bold">Phone</Text>
                  </Stack>
                  <Text as="a" href="tel:+919916233566" _hover={{ color: "brand.500" }}>
                    +91 99162 33566
                  </Text>
                  <Text as="a" href="tel:+919886865658" _hover={{ color: "brand.500" }}>
                    +91 98868 65658
                  </Text>
                </Stack>

                {/* Email */}
                <Stack direction="row" align="center" spacing={3}>
                  <FaEnvelope size={20} color="#1E7F3C" />
                  <Box>
                    <Text fontWeight="bold">Email</Text>
                    <Text as="a" href="mailto:info@clickinteriorsolutions.com" _hover={{ color: "brand.500" }}>
                      info@clickinteriorsolutions.com
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          {/* Social Media */}
          <Stack spacing={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={4} color="brand.500">
                Follow Us
              </Text>
              <Stack direction="row" spacing={4}>
                <SocialButton
                  label={"Instagram"}
                  href={"https://instagram.com"}
                >
                  <FaInstagram />
                </SocialButton>
                <SocialButton
                  label={"Facebook"}
                  href={"https://facebook.com"}
                >
                  <FaFacebook />
                </SocialButton>
                <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com"}
                >
                  <FaTwitter />
                </SocialButton>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* Copyright */}
        <Box
          borderTop="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          pt={8}
          mt={8}
        >
          <Text textAlign="center" fontSize="sm">
            {new Date().getFullYear()} Click Interior Solutions. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
