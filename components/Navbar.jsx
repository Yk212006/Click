import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <Box bg="white" borderBottom="1px solid" borderColor="#E6E2D9" position="sticky" top={0} zIndex={1001}>
        <Container maxW="7xl" px={4}>
          <Flex
            h={20}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo */}
            <Link href="/">
              <Box display="flex" alignItems="center" cursor="pointer" _hover={{ opacity: 0.8 }} transition="opacity 0.3s ease">
                <Image
                  src="/logo.png?v=1"
                  alt="Click Interior Solutions"
                  width={180}
                  height={80}
                  priority
                  unoptimized
                  style={{ width: 'auto', height: '80px' }}
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: "none", md: "flex" }} fontWeight="500" letterSpacing={0.5}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <Text
                    as="a"
                    fontSize="14px"
                    color="#7A2E3A"
                    _hover={{
                      color: "#1E7F3C",
                      borderBottom: "2px solid",
                      borderColor: "#1E7F3C",
                      pb: "2px",
                    }}
                    transition="all 0.3s ease"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </HStack>

            {/* CTA Button - Desktop */}
            <Link href="/contact" >
              <Button
                display={{ base: "none", md: "flex" }}
                variant="solid"
                size="sm"
                px={6}
                bg="#1E7F3C"
                color="white"
                _hover={{ bg: "#186B32" }}
              >
                Get Consultation
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <IconButton
              size="lg"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ base: "flex", md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="#1E7F3C"
              _hover={{ bg: "#F7F7F5" }}
            />
          </Flex>

          {/* Mobile Navigation */}
          {isOpen && (
            <Box pb={4} display={{ base: "block", md: "none" }}>
              <VStack align="start" spacing={3}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref legacyBehavior onClick={onClose}>
                    <Text as="a" fontSize="16px" fontWeight="500" color="#7A2E3A" _hover={{ color: "#1E7F3C" }} transition="color 0.3s ease">
                      {link.name}
                    </Text>
                  </Link>
                ))}
                <Link href="/contact" passHref legacyBehavior onClick={onClose}>
                  <Button 
                    as="a"
                    variant="solid" 
                    w="100%" 
                    mt={2} 
                    bg="#1E7F3C" 
                    color="white" 
                    _hover={{ bg: "#186B32" }}
                  >
                    Get Consultation
                  </Button>
                </Link>
              </VStack>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
