import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../theme";

import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>My Protfolio</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
