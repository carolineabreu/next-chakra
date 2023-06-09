import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export function Footer() {
  return (
    <Flex as="footer" justify="space-between" align="center" margin={6}>
      <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
        <Text as="h1" fontFamily="Nanum Brush Script" fontSize="2xl" color="pink.600">
          Flower Culture
        </Text>
      </Link>
      <Link as={NextLink} href="/contact" fontSize="sm" _hover={{ textDecoration: "none" }}>
        Contact Us
      </Link>
    </Flex>
  );
}
