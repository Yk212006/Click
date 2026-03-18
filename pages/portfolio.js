import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  Button,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { getAllProjects } from "../lib/api";

export default function Portfolio({ allProjects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Residential Interiors", "Office Interiors", "Commercial Projects"];

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter(
          (project) => project.attributes?.category === selectedCategory
        );

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="black" color="white" py={{ base: 16, md: 20 }} textAlign="center">
        <Container maxW="4xl">
          <Heading mb={4} fontSize={{ base: "32px", md: "44px" }}>
            Our Portfolio
          </Heading>
          <Text fontSize="18px" color="gray.300">
            Explore our collection of exceptional interior design projects
          </Text>
        </Container>
      </Box>

      {/* Filter Section */}
      <Box py={8} bg="white" borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="6xl">
          <HStack justifyContent="center" spacing={4} flexWrap="wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "solid" : "outline"}
                size="md"
                textTransform="capitalize"
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="6xl">
          {filteredProjects.length > 0 ? (
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={8}
            >
              {filteredProjects.map((project) => (
                <Box
                  key={project.id}
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="md"
                  bg="white"
                  _hover={{
                    shadow: "xl",
                    transform: "scale(1.05)",
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  {/* Image Placeholder */}
                  <Box
                    h="300px"
                    bg="linear-gradient(135deg, #C8A951, #F3EDE8)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="18px" fontWeight="bold">
                      {project.attributes?.title || "Project"}
                    </Text>
                  </Box>

                  {/* Content */}
                  <VStack align="start" p={6} spacing={4}>
                    <Heading size="md">
                      {project.attributes?.title || "Untitled Project"}
                    </Heading>

                    <Text color="gray.600" noOfLines={2}>
                      {project.attributes?.description || ""}
                    </Text>

                    {project.attributes?.category && (
                      <HStack>
                        <Text fontSize="sm" fontWeight="bold" color="white" bg="brand.500" px={3} py={1} borderRadius="full">
                          {project.attributes.category}
                        </Text>
                      </HStack>
                    )}

                    {project.attributes?.location && (
                      <Text fontSize="sm" color="gray.600">
                        📍 {project.attributes.location}
                      </Text>
                    )}
                  </VStack>
                </Box>
              ))}
            </Grid>
          ) : (
            <VStack py={16} spacing={4} textAlign="center">
              <Heading color="gray.600">No Projects Found</Heading>
              <Text color="gray.500">
                Our portfolio is being updated with stunning projects.
              </Text>
              <Text color="gray.500">
                Check back soon or contact us to discuss your project!
              </Text>
              <Link href="/contact" passHref>
                <Button as="a" variant="solid" mt={4}>
                  Get In Touch
                </Button>
              </Link>
            </VStack>
          )}
        </Container>
      </Box>

      {/* Project Stats Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="6xl">
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={8} textAlign="center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "Pan India", label: "Service Coverage" },
            ].map((stat) => (
              <VStack key={stat.label} spacing={2}>
                <Heading size="lg" color="brand.500">
                  {stat.number}
                </Heading>
                <Text color="gray.600">{stat.label}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 12, md: 20 }} bg="black" color="white" textAlign="center">
        <Container maxW="4xl">
          <Heading mb={6} fontSize={{ base: "28px", md: "36px" }}>
            Interested in Similar Design for Your Space?
          </Heading>
          <Text mb={8} fontSize="18px" color="gray.300">
            Let's discuss your project and bring your vision to life
          </Text>
          <Link href="/contact" passHref>
            <Button as="a" size="lg" bg="brand.500" _hover={{ bg: "brand.600" }}>
              Start Your Project
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}

// Fetch all projects from Strapi
export async function getStaticProps() {
  try {
    const data = await getAllProjects();
    return {
      props: {
        allProjects: data.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        allProjects: [],
      },
    };
  }
}
