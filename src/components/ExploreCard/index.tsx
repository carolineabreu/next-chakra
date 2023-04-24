import { Flex, Button, Text, Image, Link } from "@chakra-ui/react";

interface ExploreCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
}

export function ExploreCard({ imageSrc, imageAlt, category }: ExploreCardProps) {
  return (
    <Flex
      height="md"
      direction="column"
      justify="space-between"
      align="center"
      boxShadow="md"
      bgColor="gray.50"
      borderRadius={8}
      p={4}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width="2xs"
        height="xs"
        fit="cover"
        borderRadius={8}
        align="center"
      />
      <Text fontWeight="bold">{category}</Text>
      <Link href="/products">
        <Button variant="outline" colorScheme="red" size="sm">
          Explore
        </Button>
      </Link>
    </Flex>
  );
}
