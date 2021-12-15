import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Th } from "@chakra-ui/react";
import React from "react";
import { SkillTable } from "../Skilltable";

const Card = () => {
  const url = "https://github.com/users/hiroky1983/contributions";

  return (
    <Center p="2">
      <Box
        w="90%"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        p="8"
        _hover={{ boxShadow: "xl", cursor: "pointer" }}
        transform="auto-gpu"
      >
        <Heading as="h2">Profile</Heading>
        <Flex>
          <Text mt="4">
            日本マクドナルド株式会社 → 現在エンジニア転職目指して学習中
            <br />
            2020年11月からReact、TypeScript、Next.jsなどフロントエンドの学習を主に行っています。
            <br />
            2021年8月に参加している学習コミュニティで、チーム開発を体験し、プロダクトオーナーの知り合いの農家さんに使ってもらってるアプリの一般リリースに向けて新機能実装やリファクタリング、プロジェクトのTypeScript導入に貢献していきました。
          </Text>
          <Spacer />
          {/* <Image src="/profile.png" w={40} h={40} rounded="full" mr="16" /> */}
        </Flex>
        <Heading my="4" as="h3">
          Skills
        </Heading>
        <SkillTable />
        <Heading my="4" as="h3">
          学習記録
        </Heading>
        <Stack spacing="4">
          <Link
            href="https://reliable-reptile-87a.notion.site/e50d8912c3274612a01ee2ca59369c68"
            target="_blank"
          >
            Notionで毎日の学習記録
          </Link>
          <Link href="https://qiita.com/hirock_e1983" target="_blank">
            Qiita記事でのアウトプット
          </Link>
          <Link href="https://zenn.dev/hirockysan" target="_blank">
            Zenn記事でのアウトプット
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
