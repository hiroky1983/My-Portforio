import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import Icon from "@chakra-ui/icon";

const SnsCard = () => {
  return (
    <Box>
      <Flex justifyContent="center" gridGap={12} mb="8">
        <Flex
          alignItems="center"
          as={Link}
          href="https://twitter.com/hirock_e1983"
          cursor="pointer"
          target="_blank"
          _focus={{ outline: "none" }}
        >
          <Icon as={FaTwitterSquare} color="gray" w="12" h="12" />
          <Text fontSize="2xl" fontWeight="bold" ml="2">
            Twitter
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          as={Link}
          href="https://github.com/hiroky1983"
          cursor="pointer"
          target="_blank"
          _focus={{ outline: "none" }}
        >
          <Icon as={FaGithub} color="gray" w="12" h="12" />
          <Text fontSize="2xl" fontWeight="bold" ml="2">
            Github
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          as={Link}
          href="https://qiita.com/hirock_e1983"
          cursor="pointer"
          target="_blank"
          _focus={{ outline: "none" }}
        >
          <Icon
            as={SiQiita}
            bg="gray"
            color="white"
            w="12"
            h="12"
            rounded="lg"
          />
          <Text fontSize="2xl" fontWeight="bold" ml="2">
            Qiita
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          as={Link}
          href="https://zenn.dev/hirockysan"
          cursor="pointer"
          target="_blank"
          _focus={{ outline: "none" }}
        >
          <Icon
            as={SiZenn}
            bg="gray"
            color="white"
            w="12"
            h="12"
            rounded="lg"
          />
          <Text fontSize="2xl" fontWeight="bold" ml="2">
            Zenn
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SnsCard;
