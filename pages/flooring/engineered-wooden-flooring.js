import { Box, Container, Heading, Text, Button, Grid, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Badge, Stack, HStack, VStack } from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import ProductGallery from "../../components/ProductGallery";

const Breadcrumbs = ({ productName }) => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/flooring">Flooring</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{productName}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default function EngineeredWoodenFlooring() {
  return (
    <Box>
      {/* Breadcrumb */}
      <Box bg="gray.50" py={4} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl">
          <Breadcrumbs productName="Engineered Wooden Flooring" />
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 8, md: 12 }} bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap={{ base: 8, md: 12 }} alignItems="start">
            
            {/* Left Side - Product Gallery */}
            <Box>
              {/* Automatic Product Gallery */}
              <ProductGallery productPath="engineered-wooden-flooring" />
            </Box>

            {/* Right Side - Product Details */}
            <VStack spacing={6} align="start">
              {/* Stock Badge */}
              <Badge
                bg="#10B981"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="12px"
                fontWeight="600"
                textTransform="uppercase"
              >
                In Stock
              </Badge>

              {/* Product Title */}
              <Heading
                size="2xl"
                color="gray.900"
                fontWeight="700"
                lineHeight="1.2"
              >
                Engineered Wooden Flooring
              </Heading>

              {/* Product Description */}
              <Text
                fontSize="16px"
                color="gray.600"
                lineHeight="1.6"
              >
                Engineered wooden flooring combines the beauty of real hardwood with enhanced stability through its multi-layer construction. Featuring a top layer of genuine hardwood bonded to multiple layers of plywood or high-density fiberboard, this flooring offers superior resistance to temperature and humidity changes compared to solid wood.
              </Text>

              <Divider borderColor="gray.200" />

              {/* Key Features */}
              <Box>
                <Heading
                  size="md"
                  color="gray.900"
                  mb={4}
                  fontWeight="600"
                >
                  Key Features
                </Heading>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={3}>
                  {[
                    "Real hardwood surface",
                    "Enhanced dimensional stability",
                    "Can be installed below grade",
                    "Thicker wear layer than laminate",
                    "Can be refinished multiple times",
                    "Wide range of wood species"
                  ].map((feature, index) => (
                    <HStack key={index} spacing={2} align="start">
                      <CheckCircleIcon
                        color="#10B981"
                        boxSize={4}
                        mt={1}
                      />
                      <Text
                        fontSize="14px"
                        color="gray.700"
                        fontWeight="500"
                      >
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </Grid>
              </Box>

              {/* Action Buttons */}
              <VStack spacing={3} w="full" pt={4}>
                <Button
                  bg="#1E7F3C"
                  color="white"
                  size="lg"
                  w="full"
                  fontSize="16px"
                  fontWeight="600"
                  _hover={{ bg: "#166B32" }}
                  transition="all 0.2s"
                  as="a"
                  href="mailto:info@clickinteriorsolutions.com?subject=Quote Request - Engineered Wooden Flooring"
                >
                  Request Quote
                </Button>
                
                <Button
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  size="lg"
                  w="full"
                  fontSize="16px"
                  fontWeight="600"
                  _hover={{ 
                    borderColor: "gray.400",
                    bg: "gray.50"
                  }}
                  transition="all 0.2s"
                  as={Link}
                  href="/flooring"
                >
                  Back to Flooring
                </Button>
              </VStack>
            </VStack>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
