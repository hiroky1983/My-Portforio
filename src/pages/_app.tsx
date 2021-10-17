import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { costomTheme } from "../theme";

import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../Layout.tsx/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={costomTheme}>
      <Head>
        <title>My Protfolio</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
