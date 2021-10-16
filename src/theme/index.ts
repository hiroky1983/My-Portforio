import { extendTheme, theme } from "@chakra-ui/react";

export const costomTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      "html, body": {
        margin: 0,
      },
    },
  },
});
