import { Box, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function SubCategoryTile({ title, image, href }) {
  return (
    <Link href={href}>
      <Box
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        shadow="md"
        cursor="pointer"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
          shadow: "lg",
          border: "2px solid",
          borderColor: "#1E7F3C",
        }}
        border="2px solid"
        borderColor="transparent"
      >
        <Box h="200px" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
          <Image 
            src={image} 
            alt={title === "Artificial Grass" ? "Artificial Grass Flooring" : title === "Gym Flooring" ? "Gym Flooring" : title === "Rubber Flooring" ? "Rubber Flooring" : `${title} image`} 
            objectFit="cover" 
            width="100%" 
            height="100%" 
          />
        </Box>
        
        <Box p={6} bg="#fff">
          <Heading 
            as="h3" 
            size="md" 
            mb={2} 
            color="#7A2E3A"
            textAlign="center"
          >
            {title}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
}
