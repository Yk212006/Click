import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { flooringTypes } from "../../data/flooring";
import ProductTile from "../../components/ProductTile";

export default function Flooring() {
  return (
    <Box bg="#F7F7F5" minH="100vh" py={10}>
      <Container maxW="6xl">
        <Heading mb={8} color="#1E7F3C" textAlign="center">
          Flooring Types
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {flooringTypes.map((type) => (
            <ProductTile 
              key={type.slug}
              category={{
                id: type.slug,
                title: type.name,
                slug: type.slug,
                description: type.description
              }}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
