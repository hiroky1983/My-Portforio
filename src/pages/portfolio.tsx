import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import PortfolioCard from "../container/card/PortfolioCard";
import Layout from "../Layout.tsx/Layout";

type Props = {
  children: React.ReactNode;
};

const portfolio: VFC<Props> = () => {
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
              Portfolio
            </Heading>
            <PortfolioCard />
          </Stack>
        </Box>
      </Layout>
    </>
  );
};
export default portfolio;
