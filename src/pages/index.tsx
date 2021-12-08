import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import useSWR from "swr";
import Card from "../container/card/Card";
import PortfolioCard from "../container/card/PortfolioCard";
import SnsCard from "../container/card/SnsCard";
import Layout from "../Layout.tsx/Layout";

type Props = {
  children: React.ReactNode;
};

// const fetcher = async () =>
  // await fetch("http://localhost:3000/api/hello").then((res) => res.json());

const Home: VFC<Props> = () => {
  // const { data, error } = useSWR("api/hello", fetcher);
  // console.log(data);

  return (
    <>
      <Layout>
        <Box mt="8">
          <Stack spacing={8}>
            <Heading
              as="h1"
              textAlign="center"
              borderBottom="5px solid"
              borderColor="teal"
              mx="auto"
            >
              Home
            </Heading>
          </Stack>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
