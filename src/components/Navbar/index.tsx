import { Box, Link, HStack, Text, Flex } from "@chakra-ui/react";

export function Navbar() {
  return (
    <HStack as="nav" justify="space-between" align="center" w="100%" p={4} color="pink.600">
      <Box>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Text as="h1" fontFamily="Nanum Brush Script" fontSize="4xl">
            Flower Culture
          </Text>
        </Link>
      </Box>

      <HStack fontSize="lg" spacing="6">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/contact">Contact Us</Link>
      </HStack>
    </HStack>
  );
}
