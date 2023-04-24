import { Flex, Text, Button, Image, Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ExploreCard } from "../components/ExploreCard";
import data from "../../data.json";
import { PopularCard } from "../components/PopularCard";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Navbar />
      <Header />
      <Flex direction="column" w="100%" marginY={10} gap={10}>
        <Text alignSelf="center" fontSize="3xl" fontWeight="700">
          Explore by Category
        </Text>
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <ExploreCard
            imageSrc="/categoryVase.jpg"
            imageAlt="flower vases category"
            category="Flower Vases"
          />
          <ExploreCard
            imageSrc="/categoryBasket.jpg"
            imageAlt="flower baskets category"
            category="Flower Baskets"
          />
          <ExploreCard
            imageSrc="/categoryBouquet.jpg"
            imageAlt="flower bouquets category"
            category="Flower Bouquets"
          />
          <ExploreCard
            imageSrc="/categoryPotted.jpg"
            imageAlt="potted plants category"
            category="Potted Plants"
          />
        </Flex>
      </Flex>

      <Flex direction="column" w="100%" marginY={10} gap={10} align="center">
        <Text fontSize="3xl" fontWeight="700">
          Most Popular
        </Text>
        <Flex justify="space-between" align="center" wrap="wrap" gap={isWideVersion ? 20 : 4}>
          {data.map((product) => {
            return (
              <PopularCard
                imageSrc={product.image}
                imageAlt={product.name}
                name={product.name}
                price={product.price}
                key={product.name}
              />
            );
          })}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
