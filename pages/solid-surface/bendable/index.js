import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import BrandCard from "../../../components/BrandCard";

// Local fallback in case external API is not reachable
const FALLBACK_BRANDS = [
  { name: "LX Hausys", slug: "lx-hausys", image: "/home/lx.png" },
  { name: "Staron", slug: "staron", image: "/home/staron.png" },
  { name: "DuPont", slug: "dupont", image: "/home/dupont.png" },
  { name: "Tristone", slug: "tristone", image: "/home/tristone.png" },
  { name: "Dunes", slug: "dunes", image: "/home/dunes.png" },
  { name: "Rehau", slug: "rehau", image: "/home/rehau.png" },
  { name: "Vivanta", slug: "vivantha", image: "/home/vivanta.png" },
  { name: "Riya", slug: "riya-brand", image: "/home/riya.png" },
];

export default function BendableIndex({ brands = FALLBACK_BRANDS }) {
  return (
    <Box bg="#F7F7F5" minH="100vh" py={12}>
      <Container maxW="7xl">
        <Heading mb={4} color="#1E7F3C">
          Bendable Solid Surface Brands
        </Heading>
        <Text mb={8} color="gray.600">
          Materials that can be thermoformed into curved shapes — ideal for custom designs.
        </Text>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
          {brands.map((b) => (
            <Link href={`/solid-surface/bendable/${b.slug}`} key={b.slug}>
              <Box
                bg="white"
                borderRadius="12px"
                overflow="hidden"
                boxShadow="0 4px 12px rgba(0,0,0,0.08)"
                transition="transform 0.3s ease"
                cursor="pointer"
                _hover={{ 
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
                }}
              >
              {/* Brand Logo Container */}
              <Box 
                height="120px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding={4}
                bg="white"
              >
                <Image
                  src={b.image}
                  alt={`${b.name} logo`}
                  height={80}
                  width={120}
                  style={{ 
                    objectFit: "contain"
                  }}
                />
              </Box>
              
              {/* Brand Info */}
              <Box p={4}>
                <Heading 
                  size="md" 
                  mb={2} 
                  color="#1f7a3a"
                  fontWeight="600"
                  fontSize="16px"
                >
                  {b.name}
                </Heading>
                <Text 
                  color="#800000" 
                  fontSize="14px"
                >
                  Premium bendable solid surface materials
                </Text>
              </Box>
            </Box>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const API_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";
  try {
    const res = await fetch(`${API_BASE}/brands?filters[type][$eq]=bendable&populate=*&pagination[pageSize]=100`);
    const json = await res.json();
    if (json && Array.isArray(json.data) && json.data.length) {
      const brands = json.data.map((item) => {
        const attrs = item.attributes || {};
        const image = attrs.logo?.data?.[0]?.attributes?.url || attrs.image?.data?.[0]?.attributes?.url || "/logo-placeholder.png";
        return {
          name: attrs.name || attrs.title || item.id,
          slug: attrs.slug || attrs.name?.toLowerCase().replace(/\s+/g, "-") || String(item.id),
          image,
        };
      });

      return { props: { brands } };
    }
  } catch (err) {
    // ignore and fallback
    console.error("Error fetching bendable brands:", err.message || err);
  }

  return { props: { brands: FALLBACK_BRANDS } };
}
