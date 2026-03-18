import { Container, Grid, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import ProductTile from "../../components/ProductTile";
import { panelTypes } from "../../data/panels";

export default function PanelsIndex() {
  return (
    <Box bg="#F7F7F5" minH="100vh" py={12}>
      <Container maxW="6xl">
        <Heading mb={8} color="#1E7F3C">Panels</Heading>

        <Grid 
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)", 
            lg: "repeat(4, 1fr)" 
          }} 
          gap={6}
        >
          {panelTypes.map((panel) => (
            <ProductTile 
              key={panel.slug}
              category={{
                id: panel.slug,
                title: panel.name,
                slug: panel.slug,
                description: panel.description
              }}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
