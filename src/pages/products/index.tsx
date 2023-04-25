import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { PopularCard } from "@/src/components/PopularCard";
import { Flex, Grid, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import data from "../../../data.json";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Products() {
  const [search, setSearch] = useState("");

  // arrumar com display grid pra conseguir dar o espaço correto
  return (
    <>
      <Navbar />
      <Flex direction="column" gap={6} p={4}>
        <InputGroup size="md">
          <Input
            placeholder="Search products"
            _placeholder={{ opacity: 0.4, color: "gray.700" }}
            onChange={(e) => setSearch(e.target.value)}
            focusBorderColor="pink.600"
            borderColor="pink.700"
          />
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
            color="gray.700"
            marginRight={3}
            opacity={0.4}
          />
        </InputGroup>
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, auto))"
          width="100%"
          gridGap={5}
          justifyItems="center"
        >
          {data
            .filter((products) => {
              if (search === "") {
                return data;
              } else if (products.name.toLowerCase().includes(search.toLowerCase())) {
                return products;
              } else {
                return false;
              }
            })
            .map((product) => {
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
        </Grid>
      </Flex>
      <Footer />
    </>
  );
}
