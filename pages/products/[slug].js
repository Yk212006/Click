import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Badge,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProductGallery from "../../components/ProductGallery";

const PRODUCTS_DATA = {
  "solid-surface": {
    title: "Solid Surface",
    description: "Premium solid surface materials for countertops, sinks, and wall applications.",
    fullDescription:
      "Our solid surface collection offers seamless, non-porous solutions perfect for modern interiors. Durable, customizable, and easy to maintain.",
    features: ["Non-porous", "Seamless Design", "Heat Resistant", "Easy to Clean", "Customizable Colors"],
    availability: "In Stock",
  },
  flooring: {
    title: "Flooring",
    description: "Exquisite flooring options including wooden, laminate, and natural stone.",
    fullDescription:
      "Transform your spaces with our diverse flooring collection. From classic hardwood to contemporary tiles, we have options for every aesthetic.",
    features: ["Durable", "Water Resistant", "Eco-Friendly Options", "Wide Color Range", "Professional Installation"],
    availability: "In Stock",
  },
  "sports-flooring": {
    title: "Sports Flooring",
    description: "Professional-grade sports flooring for courts and fitness spaces.",
    fullDescription:
      "Engineered for performance and safety, our sports flooring meets international standards for various indoor sports.",
    features: ["Impact Absorption", "Anti-Slip Surface", "Professional Grade", "High Durability", "Shock Resistant"],
    availability: "In Stock",
  },
  panels: {
    title: "Panels",
    description: "Decorative and functional panel solutions for walls and partitions.",
    fullDescription:
      "Create stunning visual effects with our curated panel collection. Perfect for accent walls, partitions, and decorative applications.",
    features: ["Lightweight", "Modern Designs", "Sound Absorbing", "Fire Resistant", "Easy Installation"],
    availability: "In Stock",
  },
  "alabaster-sheet": {
    title: "Alabaster Sheet",
    description: "Elegant alabaster sheets for translucent and decorative applications.",
    fullDescription:
      "Natural alabaster sheets bring warmth and elegance to any space. Ideal for backlighting and premium interior finishes.",
    features: ["Translucent", "Natural Stone", "Elegant Design", "Premium Finish", "Lighting Effects"],
    availability: "In Stock",
  },
  "wall-paper": {
    title: "Wall Paper",
    description: "Designer wallpaper collection featuring contemporary and classic patterns.",
    fullDescription:
      "Our wallpaper selection brings personality and style to your walls. Choose from contemporary designs to timeless classics.",
    features: ["Washable", "Fade Resistant", "Easy Application", "Diverse Patterns", "Premium Quality"],
    availability: "In Stock",
  },
  quartz: {
    title: "Quartz",
    description: "Premium engineered quartz surfaces for countertops and decorative elements.",
    fullDescription:
      "Our quartz collection combines natural beauty with engineered durability. Perfect for kitchens, bathrooms, and high-traffic areas.",
    features: ["Non-Porous", "Stain Resistant", "Scratch Resistant", "Durable", "Luxurious Finish"],
    availability: "In Stock",
  },
};

const Breadcrumbs = ({ slug, title }) => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <Link href="/" >
          <BreadcrumbLink >Home</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/products" >
          <BreadcrumbLink >Products</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>
          {title}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!slug || !PRODUCTS_DATA[slug]) {
    return (
      <Box py={20} textAlign="center">
        <Container>
          <Heading mb={4}>Product Not Found</Heading>
          <Text color="gray.600" mb={8}>
            The product you're looking for doesn't exist.
          </Text>
          <Link href="/products" >
            <Button  colorScheme="green">
              Back to Products
            </Button>
          </Link>
        </Container>
      </Box>
    );
  }

  const product = PRODUCTS_DATA[slug];

  return (
    <Box>
      {/* Breadcrumb */}
      <Box bg="gray.50" py={4} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl">
          <Breadcrumbs slug={slug} title={product.title} />
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="start">
            {/* Image Section */}
            <Box>
              <ProductGallery productPath={`/${slug}`} />
            </Box>

            {/* Details Section */}
            <Box>
              <Badge colorScheme="green" mb={4} fontSize="12px" px={3} py={1}>
                {product.availability}
              </Badge>

              <Heading as="h1" size="2xl" mb={4} color="black">
                {product.title}
              </Heading>

              <Text color="gray.600" fontSize="18px" mb={6} lineHeight="1.8">
                {product.fullDescription}
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {product.features.map((feature, index) => (
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
                <Link href="/contact" >
                  <Button
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
                <Link href="/products" >
                  <Button
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
