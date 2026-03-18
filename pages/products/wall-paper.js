import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Divider,
  Grid,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductGallery from "../../components/ProductGallery";

function Breadcrumbs({ productName }) {
  return (
    <Box bg="gray.50" py={4} borderBottom="1px solid" borderColor="gray.200">
      <Container maxW="7xl">
        <HStack spacing={2} fontSize="sm" color="gray.600">
          <Link href="/">
            <Text _hover={{ color: "brand.500" }} cursor="pointer">Home</Text>
          </Link>
          <Text>/</Text>
          <Link href="/products">
            <Text _hover={{ color: "brand.500" }} cursor="pointer">Products</Text>
          </Link>
          <Text>/</Text>
          <Text color="brand.500" fontWeight="medium">{productName}</Text>
        </HStack>
      </Container>
    </Box>
  );
}

export default function WallPaper() {
  const router = useRouter();

  return (
    <Box>
      {/* Breadcrumb */}
      <Breadcrumbs productName="Wall Paper" />

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="start">
            {/* Image Gallery */}
            <Box>
              <ProductGallery productPath="wall-paper" />
            </Box>

            {/* Details Section */}
            <Box>
              <Badge colorScheme="green" mb={4} fontSize="12px" px={3} py={1}>
                In Stock
              </Badge>

              <Heading as="h1" size="2xl" mb={4} color="black">
                Wall Paper
              </Heading>

              <Text color="gray.600" fontSize="18px" mb={6} lineHeight="1.8">
                Premium designer wallpaper collection featuring contemporary patterns and textures. 
                Transform any space with our high-quality wall coverings that combine style, durability, 
                and easy installation for both residential and commercial interiors.
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {[
                    "Designer Patterns",
                    "High Quality Materials",
                    "Easy Installation",
                    "Durable Finish",
                    "Wide Selection",
                    "Modern Designs",
                    "Washable Surface",
                    "Professional Grade"
                  ].map((feature, index) => (
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

              {/* Applications */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Applications
                </Heading>
                <VStack align="start" spacing={2} color="gray.700">
                  <Text>• Residential interiors</Text>
                  <Text>• Commercial spaces</Text>
                  <Text>• Feature walls</Text>
                  <Text>• Office environments</Text>
                  <Text>• Retail stores</Text>
                  <Text>• Hospitality spaces</Text>
                </VStack>
              </Box>

              <Divider my={6} />

              {/* CTA Buttons */}
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href="/contact" passHref>
                  <Button
                    as="a"
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
                </Link>
                <Link href="/products" passHref>
                  <Button
                    as="a"
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
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
