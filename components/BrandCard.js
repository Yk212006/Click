import Link from "next/link";
import { Box, Image, Heading } from "@chakra-ui/react";

function makeAbsoluteImageUrl(src) {
  if (!src) return "/logo-placeholder.png";
  if (src.startsWith("http") || src.startsWith("//")) return src;
  // If NEXT_PUBLIC_STRAPI_URL includes /api, strip it
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/api\/?$/, "");
  if (src.startsWith("/")) return `${base}${src}`;
  return src;
}

export default function BrandCard({ name, image = "/logo-placeholder.png", href = "#" }) {
  const src = makeAbsoluteImageUrl(image);
  return (
    <Link href={href} passHref>
      <Box
        role="group"
        borderRadius="md"
        overflow="hidden"
        p={4}
        bg="white"
        border="1px solid"
        borderColor="transparent"
        textAlign="center"
        transition="all 0.2s ease"
        _hover={{ transform: "translateY(-6px) scale(1.02)", boxShadow: "lg", borderColor: "#1E7F3C" }}
        cursor="pointer"
      >
        <Box maxW="160px" mx="auto" mb={4}>
          <Image src={src} alt={`${name} logo`} width={160} height={80} htmlWidth="160" htmlHeight="80" objectFit="contain" />
        </Box>
        <Heading as="h4" size="sm" color="#333" fontWeight="600">
          {name}
        </Heading>
      </Box>
    </Link>
  );
}
