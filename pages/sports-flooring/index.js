import { useState } from "react";
import { Container, Grid, Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Badge, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import CategoryCard from "../../components/CategoryCard";
import SubCategoryTile from "../../components/SubCategoryTile";
import ProductGallery from "../../components/ProductGallery";
import { sportsFlooringTypes } from "../../data/sportsFlooring";

const Breadcrumbs = () => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/sports-flooring">Sports Flooring</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Sports Flooring</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default function SportsFlooringIndex() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Box>
      {/* Breadcrumb */}
      <Box bg="gray.50" py={4} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl">
          <Breadcrumbs />
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="start">
            {/* Image Section */}
            <Box>
              {/* Automatic Product Gallery */}
              <ProductGallery productPath="/sports-flooring" />
            </Box>

            {/* Details Section */}
            <Box>
              <Badge colorScheme="green" mb={4} fontSize="12px" px={3} py={1}>
                In Stock
              </Badge>

              <Heading as="h1" size="2xl" mb={4} color="black">
                Sports Flooring
              </Heading>

              <Text color="gray.600" fontSize="18px" mb={6} lineHeight="1.8">
                Professional-grade sports flooring for courts and fitness spaces. Engineered for performance and safety, our sports flooring meets international standards for various indoor sports.
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {["Impact Absorption", "Anti-Slip Surface", "Professional Grade", "High Durability", "Shock Resistant"].map((feature, index) => (
                    <Stack key={index} direction="row" align="flex-start" spacing={3}>
                      <Box
                        width="24px"
                        height="24px"
                        borderRadius="50%"
                        bg="brand.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        flexShrink={0}
                        fontSize="14px"
                        fontWeight="bold"
                      >
                        ✓
                      </Box>
                      <Text color="gray.700" fontSize="16px">
                        {feature}
                      </Text>
                    </Stack>
                  ))}
                </Grid>
              </Box>

              <Divider my={6} />

              {/* CTA Buttons */}
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  as="a"
                  href="/contact"
                  size="lg"
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: "brand.600", transform: "scale(1.02)" }}
                  flex={1}
                  fontSize="16px"
                  fontWeight="bold"
                >
                  Request Quote
                </Button>
                <Button
                  as="a"
                  href="/products"
                  size="lg"
                  variant="outline"
                  borderColor="brand.500"
                  color="brand.500"
                  _hover={{ bg: "brand.50" }}
                  flex={1}
                  fontSize="16px"
                  fontWeight="bold"
                >
                  Back to Products
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Sports Flooring Types Section */}
          <Box mt={20} pt={12} borderTop="2px solid" borderColor="gray.200">
            <Heading mb={4} textAlign="center" fontSize={{ base: "28px", md: "36px" }} color="#7A2E3A">
              Sports Flooring Types
            </Heading>
            <Text textAlign="center" mb={8} color="gray.600" fontSize="16px" maxW="2xl" mx="auto">
              Explore our range of sports flooring solutions
            </Text>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8} mb={16}>
              <SubCategoryTile
                title="Rubber Flooring"
                image="/home/rubber.jpg"
                href="/sports-flooring/rubber-flooring"
              />
              <SubCategoryTile
                title="Artificial Grass"
                image="/home/grass.jpg"
                href="/sports-flooring/artificial-grass"
              />
              <SubCategoryTile
                title="Gym Flooring"
                image="/home/gym.jpg"
                href="/sports-flooring/gym-flooring"
              />
            </Grid>
          </Box>

          {/* Related Products Section */}
          <Box mt={20} pt={12} borderTop="2px solid" borderColor="gray.200">
            <Heading mb={8} textAlign="center" fontSize={{ base: "28px", md: "36px" }}>
              Other Product Categories
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
              <Link href="/products/solid-surface">
                <Box
                  p={6}
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="gray.200"
                  textAlign="center"
                  _hover={{
                    borderColor: "brand.500",
                    shadow: "lg",
                    textDecoration: "none",
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  <Heading size="md" mb={2} color="black">
                    Solid Surface
                  </Heading>
                  <Text color="gray.600" fontSize="14px">
                    Premium solid surface solutions
                  </Text>
                </Box>
              </Link>
              <Link href="/products/flooring">
                <Box
                  p={6}
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="gray.200"
                  textAlign="center"
                  _hover={{
                    borderColor: "brand.500",
                    shadow: "lg",
                    textDecoration: "none",
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  <Heading size="md" mb={2} color="black">
                    Flooring
                  </Heading>
                  <Text color="gray.600" fontSize="14px">
                    Exquisite flooring options
                  </Text>
                </Box>
              </Link>
              <Link href="/products/panels">
                <Box
                  p={6}
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="gray.200"
                  textAlign="center"
                  _hover={{
                    borderColor: "brand.500",
                    shadow: "lg",
                    textDecoration: "none",
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  <Heading size="md" mb={2} color="black">
                    Panels
                  </Heading>
                  <Text color="gray.600" fontSize="14px">
                    Decorative panel solutions
                  </Text>
                </Box>
              </Link>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
