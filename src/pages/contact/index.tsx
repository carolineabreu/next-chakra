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
import { ChangeEvent, FormEvent, useLayoutEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  }

  let isError;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (form.name.trim() === "" || form.email.trim() === "" || form.message.trim() === "") {
      toast({
        position: "top",
        description: "All fields are required",
        status: "error",
        duration: 2000,
        isClosable: false,
      });
      return;
    }

    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });

      toast({
        position: "top",
        description: "Message sent successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }, 1000);
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
            borderWidth="2px"
            boxShadow="md"
            borderRadius={8}
            w="md"
            h={"sm" + height}
            p="6"
            gap={4}
          >
            <FormControl isRequired>
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
            <FormControl isRequired>
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
            {/**arrumar aqui pra quando o textarea for aumentado, não desconfigurar o resto */}
            <FormControl isRequired>
              <FormLabel htmlFor="message">Your message</FormLabel>
              <Textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                focusBorderColor="pink.600"
                borderColor="pink.200"
                ref={ref}
              />
            </FormControl>
            <Button type="submit" size="md" colorScheme="red">
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
