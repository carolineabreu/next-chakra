import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
        marginX: "auto",
        maxWidth: 1480,
      },
    },
  },
});
