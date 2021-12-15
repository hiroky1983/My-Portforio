import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import { getToday } from "../../utils/today";
import Keirekiyouyaku from "../container/Keirekiyouyaku";
import Pr from "../container/Pr";
import Shokumukeireki from "../container/Shokumukeireki";
import Layout from "../Layout/Layout";

const keireki = () => {
  const date = getToday();

  return (
    <Layout>
      <Center my="20" overflowY="scroll">
        <Grid
          bg="#FFF"
          w="60%"
          h="80%"
          my="auto"
          display="block"
          overflowY="auto"
        >
          <GridItem colSpan={1} rowSpan={2} mx="md" p="50">
            <Heading
              as="h1"
              display="block"
              borderBottom="2px solid"
              borderColor="gray"
              mb="2"
            >
              職務経歴書
            </Heading>
            <Text fontSize="xl" textAlign="right" mr="10">
              {date}
            </Text>
            <Text fontSize="xl" textAlign="right" mr="10">
              山田 弘樹
            </Text>
            <Keirekiyouyaku />
            <Shokumukeireki />
            <Pr />
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default keireki;
