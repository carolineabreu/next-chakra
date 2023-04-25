import { Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header() {
  return (
    <Flex
      backgroundImage="url('/banner.jpg')"
      height="2xl"
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius={8}
      justify="end"
      marginX={6}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        gap={4}
        marginRight={20}
        width="md"
      >
        <Text
          as="h1"
          color="gray.50"
          fontSize="4xl"
          textDecoration="line-through"
          textDecorationColor="red.700"
        >
          Lorem ipsum dolor sit
        </Text>

        <Text color="gray.100" fontSize="xl">
          Amet consectetur adipisicing elit. Exercitationem iusto magni quibusdam ipsum debitis
          provident?
        </Text>
        <Link as={NextLink} href="/products">
          <Button colorScheme="red" size="lg">
            Shop Now
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
