import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
  styles: {
    global: {
      "html, body": {
        margin: 0,
      },
    },
  },
});
