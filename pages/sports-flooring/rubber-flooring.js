import { useState } from "react";
import { Container, Grid, Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Badge, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProductGallery from "../../components/ProductGallery";

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
        <BreadcrumbLink>Rubber Flooring</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default function RubberFlooring() {
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
              <ProductGallery productPath="/sports-flooring/rubber-flooring" />
            </Box>

            {/* Details Section */}
            <Box>
              <Badge colorScheme="green" mb={4} fontSize="12px" px={3} py={1}>
                In Stock
              </Badge>

              <Heading as="h1" size="2xl" mb={4} color="black">
                Rubber Flooring
              </Heading>

              <Text color="gray.600" fontSize="18px" mb={6} lineHeight="1.8">
                Premium rubber flooring solutions designed for maximum durability and safety. Perfect for gyms, playgrounds, and commercial spaces requiring impact-resistant surfaces.
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {["High Impact Resistance", "Anti-Slip Surface", "Easy Maintenance", "Sound Absorption", "Eco-Friendly Material"].map((feature, index) => (
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
                  href="/sports-flooring"
                  size="lg"
                  variant="outline"
                  borderColor="brand.500"
                  color="brand.500"
                  _hover={{ bg: "brand.50" }}
                  flex={1}
                  fontSize="16px"
                  fontWeight="bold"
                >
                  Back to Sports Flooring
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
