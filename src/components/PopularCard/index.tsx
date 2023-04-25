import { Flex, Text, Image } from "@chakra-ui/react";

interface PopularCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: number;
}

export function PopularCard({ imageSrc, imageAlt, name, price }: PopularCardProps) {
  return (
    <Flex
      direction="column"
      height="sm"
      width="xs"
      boxShadow="md"
      bgColor="gray.50"
      borderRadius={8}
      align="center"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fit="cover"
        height="xs"
        width="100%"
        borderTopRadius={8}
      />
      <Text pt={2}>{name}</Text>
      <Text>
        From $<b>{price}</b>
      </Text>
    </Flex>
  );
}
