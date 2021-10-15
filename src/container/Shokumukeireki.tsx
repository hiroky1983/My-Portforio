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
      >
        職務経歴
      </Heading>
      <Flex bg="#D9D9D9" alignItems="center">
        <Heading as="h3" display="block" textAlign="left" ml="15">
          日本マクドナルド株式会社
        </Heading>
        <Spacer />
        <Text mr="10">2008年 12月 ~ 2021年 9月</Text>
      </Flex>
      <Box
        _after={{
          borderBottom: "1px solid #d9d9d9",
          borderRight: "1px solid #d9d9d9",
          borderTop: "1px solid #D9D9D9",
        }}
      >
        <Text>
          担当職務 : ハンバーガーの製造、販売、店舗管理など
          <br />
          従業員数 : 60名〜120名
        </Text>
      </Box>
    </Box>
  );
};

export default Shokumukeireki;
