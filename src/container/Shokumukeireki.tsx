import React from "react";
import { Box, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";

const Shokumukeireki = () => {
  return (
    <Box>
      <Heading
        as="h2"
        display="block"
        borderBottom="2px solid"
        borderColor="gray"
        my="6"
        fontSize="2xl"
      >
        職務経歴
      </Heading>
      <Flex bg="#D9D9D9" alignItems="center" p="4">
        <Heading as="h3" textAlign="left" fontSize="xl">
          日本マクドナルド株式会社
        </Heading>
        <Spacer />
        <Text mr="10">2008年 12月 ~ 2021年 9月</Text>
      </Flex>

      <Text>
        担当職務 : ハンバーガーの製造、販売、店舗管理など
        <br />
        従業員数 : 60名〜120名
      </Text>
    </Box>
  );
};

export default Shokumukeireki;
