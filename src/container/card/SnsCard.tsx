import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import Icon from "@chakra-ui/icon";

const snsInfomation = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/hirock_e1983",
    icon: FaTwitterSquare,
    iconColor: "gray",
    iconBgColor: "none",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/hiroky1983",
    icon: FaGithub,
    iconColor: "gray",
    iconBgColor: "none",
  },
  {
    id: 3,
    name: "Qiita",
    link: "https://qiita.com/hirock_e1983",
    icon: SiQiita,
    iconColor: "white",
    iconBgColor: "gray",
  },
  {
    id: 4,
    name: "Zenn",
    link: "https://zenn.dev/hirockysan",
    icon: SiZenn,
    iconColor: "white",
    iconBgColor: "gray",
  },
];

const SnsCard = () => {
  return (
    <Box>
      <Flex justifyContent="center" gridGap={12} mb="8">
        {snsInfomation.map((sns) => (
          <Flex
            key={sns.id}
            alignItems="center"
            as={Link}
            href={sns.link}
            cursor="pointer"
            target="_blank"
            _focus={{ outline: "none" }}
          >
            <Icon
              as={sns.icon}
              color={sns.iconColor}
              bg={sns.iconBgColor}
              w="12"
              h="12"
              rounded="lg"
            />
            <Text fontSize="2xl" fontWeight="bold" ml="2">
              {sns.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default SnsCard;
