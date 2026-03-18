import { Box, Container, Heading, Text, VStack, HStack, Image, Button, Grid, Badge, Divider, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductGallery from "../../../components/ProductGallery";

function Breadcrumbs({ brandName }) {
  return (
    <VStack spacing={1} align="start">
      <Text fontSize="sm" color="gray.600">
        <Link href="/" style={{ textDecoration: "none", color: "#1E7F3C" }}>Home</Link>
        {" > "}
        <Link href="/solid-surface" style={{ textDecoration: "none", color: "#1E7F3C" }}>Solid Surface</Link>
        {" > "}
        <Link href="/solid-surface/bendable" style={{ textDecoration: "none", color: "#1E7F3C" }}>Bendable</Link>
        {" > "}
        <Text as="span" color="gray.800" fontWeight="medium">{brandName}</Text>
      </Text>
    </VStack>
  );
}

export default function RiyaBrandPage() {
  const router = useRouter();
  const brandName = "Riya Brand";

  return (
    <Box>
      {/* Breadcrumb */}
      <Box bg="gray.50" py={4} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl">
          <Breadcrumbs brandName={brandName} />
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="start">
            {/* Image Section */}
            <Box>
              {/* Automatic Product Gallery */}
              <ProductGallery productPath="riya-solid-surface" />

              {/* Brand Logo */}
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  padding={6}
                  background="white"
                  borderRadius="12px"
                  boxShadow="0 2px 8px rgba(0,0,0,0.06)"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{ 
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
                  }}
                >
                  <Image
                    src="/home/riya.png"
                    alt={`${brandName} logo`}
                    height={60}
                    width={120}
                    style={{ 
                      objectFit: "contain",
                      marginBottom: "12px"
                    }}
                  />
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    color="gray.700"
                    textAlign="center"
                  >
                    {brandName}
                  </Text>
                </Box>
              </Grid>
            </Box>

            {/* Details Section */}
            <Box>
              <Badge colorScheme="green" mb={4} fontSize="12px" px={3} py={1}>
                In Stock
              </Badge>

              <Heading as="h1" size="2xl" mb={4} color="black">
                {brandName}
              </Heading>

              <Text color="gray.600" fontSize="18px" mb={6} lineHeight="1.8">
                Riya Brand bendable solid surface. Premium thermoformable material for custom curved designs and architectural applications. Exceptional durability, seamless integration, and modern finish for residential and commercial spaces.
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {["Thermoformable", "Seamless Integration", "High Durability", "Custom Designs", "Modern Finish", "Easy Maintenance"].map((feature, index) => (
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
                <Link href="/solid-surface/bendable" passHref>
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
                    Back to Bendable
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
