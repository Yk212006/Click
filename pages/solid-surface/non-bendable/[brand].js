import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Box, Container, Grid, Heading, Text, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Badge, Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import ProductGallery from "../../../components/ProductGallery";

const Breadcrumbs = ({ brandName }) => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <Link href="/">
          <BreadcrumbLink>Home</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/products">
          <BreadcrumbLink>Products</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/solid-surface">
          <BreadcrumbLink>Solid Surface</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/solid-surface/non-bendable">
          <BreadcrumbLink>Non Bendable</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{brandName}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

function titleCaseSlug(slug) {
  if (!slug) return "";
  
  // Handle specific brand names that should be uppercase
  const brandNames = {
    "omex": "Omex",
    "alticore": "Alticore", 
    "inlife": "Inlife",
    "rehau": "Rehau"
  };
  
  return brandNames[slug] || slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

const brandLogoMap = {
  "omex": "/home/OMEX-Logo.jpg",
  "alticore": "/home/alticore.png",
  "inlife": "/home/inlife.jpeg",
  "rehau": "/home/rehau.png"
};

export default function NonBendableBrandPage({ brandData }) {
  const router = useRouter();
  const { brand } = router.query;

  if (router.isFallback) {
    return (
      <Box py={28} textAlign="center">
        <Heading>Loading …</Heading>
      </Box>
    );
  }

  const brandName = titleCaseSlug(brand);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = brandData?.images || [];

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
              <ProductGallery productPath={`${brand === 'rehau' ? 'rehau-non' : brand}-solid-surface`} />
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
                {brandData?.description || `${brandName} non-bendable solid surface. Premium rigid materials for countertops, cladding and heavy-use applications.`}
              </Text>

              <Divider my={6} />

              {/* Features */}
              <Box mb={8}>
                <Heading as="h3" size="md" mb={4}>
                  Key Features
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {["High Durability", "Heat Resistant", "Easy Maintenance", "Modern Finish", "Cost Effective", "Wide Applications", "Long Lasting"].map((feature, index) => (
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
                <Link href="/solid-surface/non-bendable" passHref>
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
                    Back to Non Bendable
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

// Pre-render brand pages when possible
export async function getStaticPaths() {
  const API_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";
  let slugs = [];
  try {
    const res = await fetch(`${API_BASE}/brands?filters[type][$eq]=non-bendable&pagination[pageSize]=100`);
    const json = await res.json();
    if (json && Array.isArray(json.data)) {
      slugs = json.data.map((item) => item.attributes?.slug || item.attributes?.name?.toLowerCase().replace(/\s+/g, "-") || String(item.id));
    }
  } catch (err) {
    console.error("getStaticPaths non-bendable error:", err.message || err);
  }

  // fallback to a small set if API isn't available
  if (!slugs.length) {
    slugs = ["omex", "alticore", "inlife", "rehau"];
  }

  return {
    paths: slugs.map((s) => ({ params: { brand: s } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { brand } = params || {};
  const API_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";
  try {
    const res = await fetch(`${API_BASE}/brands?filters[slug][$eq]=${brand}&populate=*&pagination[pageSize]=1`);
    const json = await res.json();
    const item = json?.data?.[0];
    if (item) {
      const attrs = item.attributes || {};
      return {
        props: {
          brandData: {
            name: attrs.name || attrs.title || brand,
            description: attrs.description || "",
            images: (attrs.gallery?.data || []).map((g) => g.attributes?.url || "/logo-placeholder.png"),
            logo: attrs.logo?.data?.attributes?.url || "/logo-placeholder.png",
            brandLogo: brandLogoMap[brand] || "/logo-placeholder.png",
            brandName: attrs.name || attrs.title || brand,
          },
        }
      };
    }
  } catch (err) {
    console.error("Error fetching non-bendable brand data:", err.message || err);
  }

  // Fallback props for ISR
  return {
    props: {
      brandData: {
        name: brand,
        description: "",
        images: [],
        logo: "/logo-placeholder.png",
      },
    }
  };
}