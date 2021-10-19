import React from "react";
import { Flex, DrawerCloseButton, Stack } from "@chakra-ui/react";
import {  Spacer } from "@chakra-ui/react";

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
    >
      <DrawerCloseButton />
      <Flex direction="column" flex="1" pt="2" pb="4" overflowY="auto" px="4">
        <Stack spacing="5">
          <Stack>
            <Spacer />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
