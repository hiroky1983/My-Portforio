import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import React, { useRef } from "react";
import { SpSidebar } from "./SpSidebar";

export const linkProps = [
  { id: 1, link: "/", linkName: "HOME" },
  { id: 2, link: "/profile", linkName: "PROFILE" },
  { id: 3, link: "/keireki", linkName: "職務経歴書" },
];

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <Box>
      <Box display={{ base: "block", xl: "none" }} zIndex={5} pos="fixed">
        <Button
          ref={btnRef}
          colorScheme={"teal"}
          bg="teal"
          onClick={onOpen}
          variant="outline"
          ml={3}
          mt={3}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody p="0">
              <SpSidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box display={{ base: "none", xl: "block" }}>
        <Flex
          minHeight="100vh"
          height="100vh"
          width="270px"
          direction="column"
          bg="teal"
          color="white"
          overflowY="auto"
        >
          <Flex
            direction="column"
            flex="1"
            pt="2"
            pb="4"
            overflowY="auto"
            px="4"
            fontSize="xl"
            fontWeight="bold"
          >
            {linkProps.map((linkProp) => (
              <Stack isInline spacing={2}>
                <Box mx="auto" mt="8" mb="4">
                  <Link href={linkProp.link}>{linkProp.linkName}</Link>
                </Box>
              </Stack>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
