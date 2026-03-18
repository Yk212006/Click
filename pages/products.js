import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Button,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ProductTile } from "../components/ProductTile";

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Solid Surface",
    slug: "solid-surface",
    description: "Premium solid surface solutions",
  },
  {
    id: 2,
    title: "Flooring",
    slug: "flooring",
    description: "Exquisite flooring options",
  },
  {
    id: 3,
    title: "Sports Flooring",
    slug: "sports-flooring",
    description: "Professional sports flooring",
  },
  {
    id: 4,
    title: "Panels",
    slug: "panels",
    description: "Decorative panel solutions",
  },
  {
    id: 5,
    title: "Alabaster Sheet",
    slug: "alabaster-sheet",
    description: "Elegant alabaster sheets",
  },
  {
    id: 6,
    title: "Wall Paper",
    slug: "wall-paper",
    description: "Designer wallpaper collection",
  },
  {
    id: 7,
    title: "Quartz",
    slug: "quartz",
    description: "Premium quartz surfaces",
  },
];

export default function Products() {
  return (
    <Box>
      <Box
        h={{ base: "180px", md: "220px", lg: "260px" }}
        backgroundImage="url('/home/products-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.500"
        />
        <VStack position="relative" zIndex="1">
          <Heading color="green.500">
            Our Products
          </Heading>

          <Text color="white">
            Explore our curated collection of premium materials and surfaces designed to transform your spaces into masterpieces.
          </Text>
        </VStack>
      </Box>

      {/* Products Grid Section */}
      <Box 
        backgroundImage="url('/home/products-bg-dark.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        py={20}
      >
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={{ base: 6, md: 8 }}
            mb={16}
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <ProductTile key={category.id} category={category} />
            ))}
          </Grid>

          {/* Additional Info Section */}
          <Box
            bg="brand.50"
            p={{ base: 8, md: 12 }}
            borderRadius="lg"
            textAlign="center"
            borderTop="4px solid"
            borderColor="brand.500"
          >
            <Heading mb={4} fontSize={{ base: "24px", md: "28px" }}>
              Need Personalized Assistance?
            </Heading>
            <Text color="gray.700" mb={6} fontSize="16px" maxW="2xl" mx="auto">
              Our design experts are here to help you choose the perfect
              materials for your project.
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
                Request a Consultation
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
