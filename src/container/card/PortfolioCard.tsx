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
import { MdCheckCircle } from "react-icons/md";
import React, { VFC } from "react";
import { List, ListItem, ListIcon, Stack } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  skills: { id: number; name: string }[];
  productionStory: string;
};

const PortfolioCard: VFC<Props> = (props) => {
  const { title, description, link, githubLink, skills, productionStory } =
    props;
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
          <Stack spacing="4">
            <Text as={Link} href={link} cursor="pointer" target="_blank" px="4">
              {description}
            </Text>
            <Text px="4">{productionStory}</Text>
          </Stack>
          <Spacer />
          <Link href={githubLink} color="gray" target="_blank" cursor="pointer">
            <Icon as={FaGithub} w="6" h="6" />
          </Link>
        </Flex>
        <Text my="2" fontWeight="bold">
          使用技術
        </Text>
        {skills.map((skill) => (
          <List spacing={3} px="4" key={skill.id}>
            <ListItem>
              <ListIcon key={skill.id} as={MdCheckCircle} color="teal" />
              {skill.name}
            </ListItem>
          </List>
        ))}
      </Box>
    </Center>
  );
};

export default PortfolioCard;
