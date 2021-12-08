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
import React, { VFC } from "react";

type Props = {
  title: string;
  description: string;
  link: string;
  githubLink: string;
};

const PortfolioCard: VFC<Props> = (props) => {
  const { title, description, link, githubLink } = props;
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
        <Heading>{title}</Heading>
        <Flex mt="4">
          <Text as={Link} href={link} cursor="pointer" target="_blank">
            {description}
          </Text>
          <Spacer />
          <Link href={githubLink} color="gray" target="_blank" cursor="pointer">
            <Icon as={FaGithub} w="6" h="6" />
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};

export default PortfolioCard;
