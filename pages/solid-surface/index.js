import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function SolidSurfaceIndex() {
  return (
    <Box bg="#F7F7F5" minH="100vh" py={16}>
      <Container maxW="7xl">
        <Heading mb={6} textAlign="center" color="#1E7F3C">
          Solid Surface
        </Heading>
        <Text textAlign="center" mb={12} color="gray.600">
          Explore our Solid Surface categories: Bendable and Non Bendable materials.
        </Text>

        <Box maxW="1200px" mx="auto" px={5}>
        <Grid 
          templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
          gap={12}
          className="products-grid"
        >
          <Link href="/solid-surface/bendable">
            <Box
              bg="white"
              borderRadius="10px"
              overflow="hidden"
              boxShadow="0 4px 12px rgba(0,0,0,0.08)"
              transition="transform 0.3s ease"
              cursor="pointer"
              className="product-card"
              _hover={{ 
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
              }}
            >
              <Box position="relative" width="100%" height="220px" overflow="hidden" className="product-image">
                <Image
                  src="/home/bendable-solid-surface.png"
                  alt="Bendable Solid Surface"
                  fill
                  style={{ 
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0"
                  }}
                />
              </Box>
              <Box p={4} className="product-content">
                <Heading 
                  size="md" 
                  mb={2} 
                  color="#1f7a3a"
                  fontWeight="600"
                  fontSize="16px"
                >
                  Bendable Solid Surface
                </Heading>
                <Text 
                  color="#800000" 
                  fontSize="14px"
                >
                  Flexible sheets that can be thermoformed into curves and shapes.
                </Text>
              </Box>
            </Box>
          </Link>

          <Link href="/solid-surface/non-bendable">
            <Box
              bg="white"
              borderRadius="10px"
              overflow="hidden"
              boxShadow="0 4px 12px rgba(0,0,0,0.08)"
              transition="transform 0.3s ease"
              cursor="pointer"
              className="product-card"
              _hover={{ 
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
              }}
            >
              <Box position="relative" width="100%" height="220px" overflow="hidden" className="product-image">
                <Image
                  src="/home/non-bendable-solid-surface.jpg"
                  alt="Non Bendable Solid Surface"
                  fill
                  style={{ 
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0"
                  }}
                />
              </Box>
              <Box p={4} className="product-content">
                <Heading 
                  size="md" 
                  mb={2} 
                  color="#1f7a3a"
                  fontWeight="600"
                  fontSize="16px"
                >
                  Non Bendable Solid Surface
                </Heading>
                <Text 
                  color="#800000" 
                  fontSize="14px"
                >
                  Rigid surfaces for countertops, cladding and heavy-use applications.
                </Text>
              </Box>
            </Box>
          </Link>
        </Grid>
      </Box>
      </Container>
    </Box>
  );
}
