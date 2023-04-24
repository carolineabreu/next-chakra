import { Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex as="footer" justify="space-between" align="center" marginY={4} w="100%">
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Text as="h1" fontFamily="Nanum Brush Script" fontSize="2xl" color="pink.600">
          Flower Culture
        </Text>
      </Link>
      <Link href="/contact" fontSize="sm" _hover={{ textDecoration: "none" }}>
        Contact Us
      </Link>
    </Flex>
  );
}
