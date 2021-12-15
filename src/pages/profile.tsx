import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import useSWR from "swr";
import { bietNewSkills, memberChoosedSkills } from "../../utils/skills";
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
              description="外国人と日本人の交際に関する情報サイトです（製作中）"
              link=""
              githubLink="https://github.com/hiroky1983/biet_new"
              skills={bietNewSkills}
            />
            <PortfolioCard
              title="Member-Choosed"
              description="学習サイトで一緒に学習する人を選ぶ為に作ったメンバー選定アプリ,制作時間30分で初めて他人にも使ってもらったアプリです"
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
