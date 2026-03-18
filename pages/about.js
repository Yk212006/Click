import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="black" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <Heading mb={4} fontSize={{ base: "32px", md: "44px" }}>
            About Click Interior Solutions
          </Heading>
          <Text fontSize="18px" color="gray.300">
            Transforming spaces into timeless luxury since day one
          </Text>
        </Container>
      </Box>

      {/* Story Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            <VStack align="start" spacing={6}>
              <Heading fontSize={{ base: "28px", md: "36px" }}>
                Our Story
              </Heading>
              <Text color="gray.700" fontSize="16px" lineHeight="1.8">
                Click Interior Solutions was founded with a singular vision: to create
                extraordinary interior spaces that inspire, comfort, and delight. Based in
                Bengaluru, we have evolved from a small team of passionate designers into
                a full-service interior design firm serving clients across pan-India.
              </Text>
              <Text color="gray.700" fontSize="16px" lineHeight="1.8">
                Our journey has been defined by our commitment to excellence, innovation,
                and client satisfaction. Every project we undertake is a testament to our
                dedication to transforming ordinary spaces into timeless luxury.
              </Text>
            </VStack>

            {/* Image Placeholder */}
            <Box
              h="400px"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              overflow="hidden"
            >
              <Image
                src="/logo.png"
                alt="Click Interior Solutions Logo"
                fill
                style={{
                  objectFit: "scale-down",
                  padding: "40px"
                }}
                priority
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12} fontSize={{ base: "28px", md: "36px" }}>
            Our Core Values
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                title: "Excellence",
                description:
                  "We pursue the highest standards in design, craftsmanship, and client service.",
              },
              {
                title: "Innovation",
                description:
                  "We stay ahead of design trends while creating timeless, functional spaces.",
              },
              {
                title: "Integrity",
                description:
                  "We build trust through transparency, honesty, and reliable delivery.",
              },
              {
                title: "Client-Centric",
                description:
                  "Your vision and satisfaction are at the heart of everything we do.",
              },
              {
                title: "Sustainability",
                description:
                  "We incorporate eco-friendly practices and materials in our designs.",
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with clients and partners to achieve shared goals.",
              },
            ].map((value) => (
              <VStack
                key={value.title}
                p={8}
                bg="white"
                borderRadius="lg"
                shadow="md"
                spacing={4}
                align="start"
              >
                <CheckCircleIcon boxSize={8} color="brand.500" />
                <Heading size="md">{value.title}</Heading>
                <Text color="gray.700">{value.description}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            {/* Image Placeholder */}
            <Box
              h="400px"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              overflow="hidden"
            >
              <Image
                src="/home/seal-removebg-preview.png"
                alt="Company Seal"
                fill
                style={{
                  objectFit: "contain"
                }}
                priority
              />
            </Box>

            <VStack align="start" spacing={4}>
              <Heading fontSize={{ base: "24px", md: "32px" }}>
                Why Choose Click Interior Solutions?
              </Heading>

              {[
                "Bespoke designs tailored to your unique preferences",
                "Expert team with 10+ years of industry experience",
                "End-to-end project management and support",
                "High-quality materials and craftsmanship",
                "Pan-India service coverage",
                "Transparent pricing and timely delivery",
              ].map((reason) => (
                <HStack key={reason} spacing={4} align="start">
                  <CheckCircleIcon color="brand.500" mt={1} />
                  <Text color="gray.700">{reason}</Text>
                </HStack>
              ))}
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 12, md: 20 }} bg="black" color="white" textAlign="center">
        <Container maxW="4xl">
          <Heading mb={6} fontSize={{ base: "28px", md: "36px" }}>
            Ready to Work With Us?
          </Heading>
          <Text mb={8} fontSize="18px" color="gray.300">
            Let's create something extraordinary together
          </Text>
          <Link href="/contact" legacyBehavior passHref>
            <Button as="a" size="lg" bg="brand.500" _hover={{ bg: "brand.600" }}>
              Schedule Consultation
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
