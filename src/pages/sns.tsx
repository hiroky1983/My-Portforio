import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import SnsCard from "../container/card/SnsCard";
import Layout from "../Layout.tsx/Layout";

type Props = {
  children: React.ReactNode;
};

const sns: VFC<Props> = (props) => {
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
              SNS
            </Heading>
            <SnsCard />
          </Stack>
        </Box>
      </Layout>
    </>
  );
};
export default sns;
