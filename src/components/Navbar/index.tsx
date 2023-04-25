import { Box, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export function Navbar() {
  return (
    <HStack as="nav" justify="space-between" align="center" w="100%" p={6} color="pink.600">
      <Box>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Text as="h1" fontFamily="Nanum Brush Script" fontSize="4xl">
            Flower Culture
          </Text>
        </Link>
      </Box>

      <HStack fontSize="lg" spacing="6">
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/products">
          Shop
        </Link>
        <Link as={NextLink} href="/contact">
          Contact Us
        </Link>
      </HStack>
    </HStack>
  );
}
