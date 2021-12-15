import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import useSWR from "swr";
import { bietNewSkills, memberChoosedSkills } from "../../utils/skills";
import {
  bietNewDiscripton,
  bietNewProductionStory,
  memberChoosedDiscripton,
  memberChoosedProductionStory,
} from "../../utils/text";
import Card from "../container/card/Card";
import PortfolioCard from "../container/card/PortfolioCard";
import SnsCard from "../container/card/SnsCard";
import Layout from "../Layout.tsx/Layout";

const fetcher = async (url: any) => {
  await fetch(url).then((res) => res.json());
};

const profile = () => {
  const { data, error } = useSWR("api/hello", fetcher);

  console.log(data);

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
              PROFILE
            </Heading>
            <Card />
          </Stack>
          <Stack spacing={8} mt="12">
            <Heading
              as="h1"
              textAlign="center"
              borderBottom="5px solid"
              borderColor="teal"
              mx="auto"
            >
              PORTFOLIO
            </Heading>
            <PortfolioCard
              title="Biet-new"
              description={bietNewDiscripton}
              productionStory={bietNewProductionStory}
              link=""
              githubLink="https://github.com/hiroky1983/biet_new"
              skills={bietNewSkills}
            />
            <PortfolioCard
              title="Member-Choosed"
              description={memberChoosedDiscripton}
              productionStory={memberChoosedProductionStory}
              link="https://member-choosed-hiroky1983.vercel.app/"
              githubLink="https://github.com/hiroky1983/Member-Choosed"
              skills={memberChoosedSkills}
            />
          </Stack>
          <Stack spacing={8} mt="12">
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

export default profile;
