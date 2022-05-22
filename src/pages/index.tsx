import { Box, Heading, Stack } from "@chakra-ui/layout";
import { VFC } from "react";
import useSWR from "swr";
import {
  bietNewSkills,
  kaiMonoSkills,
  k_blogSkills,
  laravelTodoSkills,
  memberChoosedSkills,
  memberChoosedVueSkills,
} from "../../utils/skills";
import {
  bietNewDiscripton,
  bietNewProductionStory,
  kaiMonoDiscripton,
  kaiMonoProductionStory,
  k_blogDiscripton,
  k_blogProductionStory,
  laravelTodoDiscripton,
  laravelTodoProductionStory,
  memberChoosedDiscripton,
  memberChoosedProductionStory,
  memberChoosedVueDiscripton,
  memberChoosedVueProductionStory,
} from "../../utils/text";
import Card from "../container/card/Card";
import PortfolioCard from "../container/card/PortfolioCard";
import SnsCard from "../container/card/SnsCard";
import Layout from "../Layout/Layout";

const PortfolioCards = [
  {
    id: 1,
    title: "Biet-new",
    description: bietNewDiscripton,
    productionStory: bietNewProductionStory,
    link: "https://biet-news-574ge713j-hiroky1983.vercel.app/",
    githubLink: "https://biet-news-my3ff0axs-hiroky1983.vercel.app/",
    skills: bietNewSkills,
  },
  {
    id: 2,
    title: "Member-Choosed",
    description: memberChoosedDiscripton,
    productionStory: memberChoosedProductionStory,
    link: "https://member-choosed-hiroky1983.vercel.app/",
    githubLink: "https://github.com/hiroky1983/Member-Choosed",
    skills: memberChoosedSkills,
  },
  {
    id: 3,
    title: "Member-Choosed(vue)",
    description: memberChoosedVueDiscripton,
    productionStory: memberChoosedVueProductionStory,
    link: "https://member-eight.vercel.app/",
    githubLink: "https://github.com/hiroky1983/member",
    skills: memberChoosedVueSkills,
  },
  {
    id: 4,
    title: "kai-mono",
    description: kaiMonoDiscripton,
    productionStory: kaiMonoProductionStory,
    link: "https://kai-mono.vercel.app/about",
    githubLink: "https://github.com/hiroky1983/kai-mono",
    skills: kaiMonoSkills,
  },
  {
    id: 5,
    title: "k-blog",
    description: k_blogDiscripton,
    productionStory: k_blogProductionStory,
    link: "https://k-blog-nine.vercel.app/",
    githubLink: "https://github.com/hiroky1983/khanh-blog",
    skills: k_blogSkills,
  },
  {
    id: 6,
    title: "LaravelTodo",
    description: laravelTodoDiscripton,
    productionStory: laravelTodoProductionStory,
    link: "",
    githubLink: "",
    skills: laravelTodoSkills,
  },
];

const fetcher = async () => {
  const res = await fetch("/api/hello", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const Home = () => {
  // console.log(fetcher());

  // const { data, error } = useSWR("api/hello", fetcher);

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
            {PortfolioCards.map((card) => {
              return (
                <PortfolioCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  productionStory={card.productionStory}
                  link={card.link}
                  githubLink={card.githubLink}
                  skills={card.skills}
                />
              );
            })}
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

export default Home;
