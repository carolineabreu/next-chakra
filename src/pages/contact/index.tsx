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
  Button,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setTimeout(() => {
      location.reload();
    }, 2000);

    toast({
      position: "top",
      description: "Message sent successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <>
      <Navbar />
      <Flex align="center" justify="center" p={4}>
        <Box as="form" borderRadius={8} onSubmit={handleSubmit}>
          <Heading textAlign="center" pb="4">
            Contact Us
          </Heading>

          <Flex
            direction="column"
            justifyContent="space-evenly"
            align="center"
            bgColor="whiteAlpha.400"
            boxShadow="md"
            borderRadius={8}
            w="md"
            h="sm"
            p="6"
            gap={4}
          >
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                focusBorderColor="pink.600"
                borderColor="pink.200"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                id="email"
                value={form.email}
                type="email"
                onChange={handleChange}
                focusBorderColor="pink.600"
                borderColor="pink.200"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Your message</FormLabel>
              <Textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                focusBorderColor="pink.600"
                borderColor="pink.200"
              />
            </FormControl>
            <Button type="submit" size="md" colorScheme="red">
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
