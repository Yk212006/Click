import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="black" color="white">
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12} mb={12}>
          {/* Company Info */}
          <VStack align="start" spacing={4}>
            <Text fontSize="20px" fontWeight="bold" letterSpacing={1}>
              CLICK INTERIOR
            </Text>
            <Text color="gray.400" fontSize="14px" lineHeight="1.8">
              Premium interior design solutions for residential, office, and commercial spaces
              across pan-India.
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontSize="16px" fontWeight="bold">
              Quick Links
            </Text>
            <Link href="/">
              <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                Home
              </Text>
            </Link>
            <Link href="/services">
              <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                Services
              </Text>
            </Link>
            <Link href="/portfolio">
              <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                Portfolio
              </Text>
            </Link>
            <Link href="/about">
              <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                About
              </Text>
            </Link>
            <Link href="/contact">
              <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                Contact
              </Text>
            </Link>
          </VStack>

          {/* Services */}
          <VStack align="start" spacing={3}>
            <Text fontSize="16px" fontWeight="bold">
              Services
            </Text>
            <Text color="gray.400" fontSize="14px">
              Residential Interiors
            </Text>
            <Text color="gray.400" fontSize="14px">
              Office Interiors
            </Text>
            <Text color="gray.400" fontSize="14px">
              Commercial Projects
            </Text>
            <Text color="gray.400" fontSize="14px">
              3D Visualization
            </Text>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4}>
            <Text fontSize="16px" fontWeight="bold">
              Contact Info
            </Text>
            <VStack spacing={3} align="start">
              <HStack spacing={3} align="start">
                <FaPhone color="#C8A951" size={16} />
                <Text fontWeight="bold">Phone</Text>
              </HStack>
              <Link href="tel:+919916233566">
                <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                  +91 99162 33566
                </Text>
              </Link>
              <Link href="tel:+919886865658">
                <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                  +91 98868 65658
                </Text>
              </Link>
            </VStack>
            <HStack spacing={3} align="start">
              <FaEnvelope color="#C8A951" size={16} />
              <Link href="mailto:info@clickinteriorsolutions.com">
                <Text _hover={{ color: "brand.500" }} transition="all 0.2s">
                  info@clickinteriorsolutions.com
                </Text>
              </Link>
            </HStack>
            <HStack spacing={3} align="start">
              <FaMapMarkerAlt color="#C8A951" size={16} />
              <Text color="gray.400" fontSize="14px">
                Bengaluru, India
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.700" />

        {/* Bottom Section */}
        <HStack
          justify="space-between"
          align="center"
          flexWrap="wrap"
          spacing={8}
        >
          <Text color="gray.400" fontSize="14px">
            © 2024 Click Interior Solutions. All rights reserved.
          </Text>

          <HStack spacing={6}>
            <ChakraLink
              href="https://facebook.com"
              isExternal
              _hover={{ color: "brand.500" }}
              transition="all 0.2s"
            >
              <FaFacebook size={20} />
            </ChakraLink>
            <ChakraLink
              href="https://instagram.com"
              isExternal
              _hover={{ color: "brand.500" }}
              transition="all 0.2s"
            >
              <FaInstagram size={20} />
            </ChakraLink>
            <ChakraLink
              href="https://twitter.com"
              isExternal
              _hover={{ color: "brand.500" }}
              transition="all 0.2s"
            >
              <FaTwitter size={20} />
            </ChakraLink>
            <ChakraLink
              href="https://linkedin.com"
              isExternal
              _hover={{ color: "brand.500" }}
              transition="all 0.2s"
            >
              <FaLinkedin size={20} />
            </ChakraLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
