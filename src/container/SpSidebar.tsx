import React from "react";
import { Flex, DrawerCloseButton, Stack, Box } from "@chakra-ui/react";
import { linkProps } from "./Sidebar";
import Link from "next/link";

export const SpSidebar = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      direction="column"
      position="fixed"
      bg="teal"
      color="white"
      px={2}
      py={2}
      overflowY="auto"
      fontSize="xl"
      fontWeight="bold"
    >
      <DrawerCloseButton />
      <Flex direction="column" flex="1" pt="2" pb="4" overflowY="auto" px="4">
        <Stack spacing="5">
          {linkProps.map((linkProp) => (
            <Stack isInline spacing={2} key={linkProp.id}>
              <Box mx="auto" mt="8" mb="4">
                <Link href={linkProp.link}>{linkProp.linkName}</Link>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};
