import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Navbar />
      <Flex align="center" justify="center" w="100%">
        <Box as="form" borderRadius={8}>
          <Heading textAlign="center" pb="4">
            Contact Us
          </Heading>

          <Flex
            direction="column"
            justifyContent="space-evenly"
            bgColor="gray.50"
            boxShadow="sm"
            borderRadius={8}
            w="md"
            h="sm"
            p="6"
          >
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input name="name" id="name" value={form.name} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                id="email"
                value={form.email}
                type="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Your message</FormLabel>
              <Textarea name="message" id="message" value={form.message} onChange={handleChange} />
            </FormControl>

            <Button type="submit">Send</Button>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
