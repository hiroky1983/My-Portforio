import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import Head from "next/head";
import { getToday } from "../../utils/today";
import Keirekiyouyaku from "../container/keirekiyouyaku";
import Pr from "../container/Pr";
import Shokumukeireki from "../container/Shokumukeireki";

export default function Home() {
  const date = getToday();

  return (
    <Center bg="#F2F2F2" w="100vw" h="100vh" overflowY="scroll">
      <Head>
        <title>Next.js Sample</title>
      </Head>
      <Grid bg="#FFF" w="50%" my="auto" display="block" overflowY="auto">
        <GridItem colSpan={1} rowSpan={2} boxShadow="2xl" mx="md" p="50">
          <Heading
            as="h1"
            display="block"
            borderBottom="2px solid"
            borderColor="gray"
          >
            職務経歴書
          </Heading>
          <Text fontSize="4xl" textAlign="right" mr="10">
            {date}
          </Text>
          <Text fontSize="4xl" textAlign="right" mr="10">
            山田 弘樹
          </Text>
          <Keirekiyouyaku />
          <Shokumukeireki />
          <Pr />
        </GridItem>
      </Grid>
    </Center>
  );
}
