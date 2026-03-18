import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "../lib/api";

export default function Home({ projects = [] }) {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height="400px"
        width="100%"
        overflow="hidden"
      >
        <Image
          src="/home/hero.jpg"
          alt="Interior Design"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
          priority
        />
        
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.6)"
          zIndex="1"
        />
        
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="2"
          color="white"
          textAlign="center"
        >
          <Heading
            as="h1"
            size="2xl"
            mb={6}
            fontSize={{ base: "28px", md: "48px" }}
            fontWeight="bold"
            letterSpacing={1}
          >
            Transforming Spaces Into{" "}
            <Text as="span" color="brand.500">
              Timeless Luxury
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "20px" }}
            mb={8}
            color="gray.300"
            maxW="3xl"
            mx="auto"
          >
            Premium Interior Designers in Bengaluru & Across India
          </Text>

          <Link href="/contact" >
            <Button
                            size="lg"
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600", transform: "scale(1.05)" }}
              fontSize="16px"
              px={8}
            >
              Get Free Consultation
            </Button>
          </Link>
        </VStack>
      </Box>

      
      {/* Products Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12} fontSize={{ base: "28px", md: "36px" }}>
            Our Products
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
            {/* Solid Surface */}
            <Link href="/solid-surface" >
              <Box
                                bg="white"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Box
                position="relative"
                height="180px"
                width="100%"
                borderTopRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="/home/solidsurface.jpg"
                  alt="Solid Surface"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </Box>
                <Box p={6}>
                  <Heading size="md" mb={2} textAlign="center">
                    Solid Surface
                  </Heading>
                  <Text color="gray.600" textAlign="center" fontSize="sm">
                    Premium solid surface materials for modern interiors
                  </Text>
                </Box>
              </Box>
            </Link>

            {/* Wallpaper */}
            <Link href="/wallpaper" >
              <Box
                                bg="white"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Box
                position="relative"
                height="180px"
                width="100%"
                borderTopRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="/home/wallpaper.png"
                  alt="Wallpaper"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </Box>
                <Box p={6}>
                  <Heading size="md" mb={2} textAlign="center">
                    Wallpaper
                  </Heading>
                  <Text color="gray.600" textAlign="center" fontSize="sm">
                    Designer wallpapers for elegant wall treatments
                  </Text>
                </Box>
              </Box>
            </Link>

            {/* Flooring */}
            <Link href="/flooring" >
              <Box
                                bg="white"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Box
                position="relative"
                height="180px"
                width="100%"
                borderTopRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="/home/flooring.jpg"
                  alt="Flooring"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </Box>
                <Box p={6}>
                  <Heading size="md" mb={2} textAlign="center">
                    Flooring
                  </Heading>
                  <Text color="gray.600" textAlign="center" fontSize="sm">
                    Premium flooring solutions for all spaces
                  </Text>
                </Box>
              </Box>
            </Link>

            {/* Panels */}
            <Link href="/panels" >
              <Box
                                bg="white"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Box
                position="relative"
                height="180px"
                width="100%"
                borderTopRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="/home/panels.jpg"
                  alt="Panels"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </Box>
                <Box p={6}>
                  <Heading size="md" mb={2} textAlign="center">
                    Panels
                  </Heading>
                  <Text color="gray.600" textAlign="center" fontSize="sm">
                    Premium wall panels for modern interior designs
                  </Text>
                </Box>
              </Box>
            </Link>
          </Grid>
          
          <Box textAlign="center" mt={12}>
            <Link href="/products" >
              <Button
                                size="lg"
                bg="#1E7F3C"
                color="white"
                _hover={{ bg: "#186B32" }}
                px={8}
              >
                More Products
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="6xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="center">
            <Box>
              <Heading mb={6} fontSize={{ base: "24px", md: "32px" }}>
                About Click Interior Solutions
              </Heading>
              <Text color="gray.700" mb={4} lineHeight="1.8">
                Based in Bengaluru, we are a team of passionate interior designers
                and architects dedicated to creating spaces that reflect luxury and elegance.
              </Text>
              <Text color="gray.700" mb={6} lineHeight="1.8">
                With expertise spanning residential, office, and commercial projects,
                we serve clients across pan-India with a commitment to excellence.
              </Text>
              
              <Link href="/about" >
                <Button  variant="solid" mt={6}>
                  Learn More About Us
                </Button>
              </Link>
            </Box>
            <Box
              position="relative"
              height="500px"
              width="500px"
            >
              <Image
                src="/home/seal.png"
                alt="Company Seal"
                fill
                style={{
                  objectFit: "contain"
                }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA Section */}
      <Box position="relative" height="400px" width="100%">
        <Image
          src="/home/about-bg.jpg"
          alt="Interior Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.6)"
        />
        <Container maxW="4xl" position="relative" zIndex="1" color="white" textAlign="center" py={{ base: 12, md: 20 }}>
          <Heading mb={6} fontSize={{ base: "28px", md: "36px" }}>
            Ready to Transform Your Space?
          </Heading>
          <Text mb={8} fontSize="18px" color="gray.300">
            Let's create something extraordinary together
          </Text>
          <Link href="/contact" >
            <Button
                            size="lg"
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
            >
              Get In Touch
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}

// Fetch featured projects from Strapi
export async function getStaticProps() {
  try {
    const data = await getAllProjects({ pagination: { limit: 3 } });
    return {
      props: {
        projects: data.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
