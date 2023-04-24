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
      height="2xs"
      width="2xs"
      direction="column"
      justify="space-between"
      align="center"
      boxShadow="md"
      bgColor="gray.50"
      borderRadius={8}
    >
      <Image src={imageSrc} alt={imageAlt} height="70%" w="100%" fit="cover" borderTopRadius={8} />
      <Text fontSize="md">{name}</Text>
      <Text fontSize="sm" mb={3}>
        From $<b>{price}</b>
      </Text>
    </Flex>
  );
}
