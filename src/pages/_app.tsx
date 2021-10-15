import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react"
import { costomTheme } from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={costomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
