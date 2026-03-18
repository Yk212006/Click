import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

/**
 * ProductTile Component
 * 
 * A reusable tile component for displaying product categories with
 * hover animations and navigation.
 * 
 * @param {Object} category - The product category object
 * @param {number} category.id - Unique identifier
 * @param {string} category.title - Category title
 * @param {string} category.slug - URL slug for navigation
 * @param {string} category.description - Short description
 * @param {string} [category.backgroundImage] - Optional background image URL
 * @returns {JSX.Element} ProductTile component
 */
export const ProductTile = ({ category }) => {
  const href = category.slug === "solid-surface" ? "/solid-surface" : 
                 category.slug === "flooring" ? "/flooring" : 
                 category.slug === "sports-flooring" ? "/sports-flooring" : 
                 category.slug === "panels" ? "/panels" : 
                 category.slug.includes("flooring") ? `/flooring/${category.slug}` : 
                 category.slug === "acoustic-panels" ? `/panels/${category.slug}` :
                 category.slug === "mlv-sound-barrier" ? `/panels/${category.slug}` :
                 category.slug === "louver-fluted-panels" ? `/panels/${category.slug}` :
                 category.slug === "charcoal-panels" ? `/panels/${category.slug}` :
                 category.slug === "pvc-panels" ? `/panels/${category.slug}` :
                 category.slug === "hpl-cladding" ? `/panels/${category.slug}` :
                 `/products/${category.slug}`;

  const imageMap = {
    "solid-surface": "/home/solidsurface.jpg",
    "flooring": "/home/flooring.jpg",
    "sports-flooring": "/home/sportsflooring.png",
    "panels": "/home/panels.jpg",
    "alabaster-sheet": "/home/alabaster.jpg",
    "wall-paper": "/home/wallpaper.png",
    "quartz": "/home/quartz.png",
    "laminated-wooden-flooring": "/home/laminatedwooden.webp",
    "engineered-wooden-flooring": "/home/engineered.jpg",
    "solid-wooden-flooring": "/home/solidwood.webp",
    "spc-flooring": "/home/spc.webp",
    "deck-flooring": "/home/deck.png",
    "vinyl-flooring": "/home/vinyl.webp",
    "lvt-flooring": "/home/lvt.jpg",
    "homogeneous-antistatic-flooring": "/home/homogenous.jpg",
    "carpet-flooring": "/home/carpet.jpg",
    "non-woven-flooring": "/home/nonwoven.jpg",
    "acoustic-panels": "/home/acoustic.png",
    "mlv-sound-barrier": "/home/mlv.png",
    "louver-fluted-panels": "/home/fluted.webp",
    "charcoal-panels": "/home/charcoal.webp",
    "pvc-panels": "/home/pvc.webp",
    "hpl-cladding": "/home/hpl.png"
  };

  const productImage = imageMap[category.slug];
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      transition="0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
      cursor="pointer"
      onClick={() => window.location.href = href}
    >
      {/* Product Image */}
      <Box position="relative" width="100%" height="220px">
        <Image
          src={productImage}
          alt={category.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Text section below image */}
      <Box p={4} bg="white">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="green.600"
          mb={1}
        >
          {category.title}
        </Text>
        <Text
          fontSize="sm"
          color="gray.600"
        >
          {category.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductTile;
