import Icon from "@chakra-ui/icon";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { FaGithub } from "react-icons/fa";
import React from "react";

const PortfolioCard = () => {
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
        <Heading>Biet-new</Heading>
        <Flex mt="4">
          <Text as={Link} href="" cursor="pointer" target="_blank">
            外国人と日本人の交際に関する情報サイトです（製作中）
          </Text>
          <Spacer />
          <Link
            href="https://github.com/hiroky1983/biet_new"
            color="gray"
            target="_blank"
            cursor="pointer"
          >
            <Icon as={FaGithub} w="6" h="6" />
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};

export default PortfolioCard;
