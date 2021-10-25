import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Link, Spacer, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import { SpSidebar } from "./SpSidebar";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <Box>
      <Box display={{ base: "block", xl: "none" }} zIndex={5} pos="fixed">
        <Button
          ref={btnRef}
          onClick={onOpen}
          variant="outline"
          icon={<HamburgerIcon />}
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
          >
            <Stack isInline spacing={8}>
              <Box mx="auto" mt="8" mb="4">
                <Link href="/" fontSize="xl" fontWeight="bold" display="block">
                  HOME
                </Link>
              </Box>
            </Stack>

            <Stack isInline spacing={4}>
              <Box mx="auto" mb="4">
                <Link
                  href="/sns"
                  display="block"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  SNS
                </Link>
              </Box>
            </Stack>
            <Stack isInline spacing={4}>
              <Box mx="auto" mb="4">
                <Link
                  href="/portfolio"
                  display="block"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  ポートフォリオ
                </Link>
              </Box>
            </Stack>
            <Stack isInline spacing={4}>
              <Box mx="auto" mb="4">
                <Link
                  href="/keireki"
                  display="block"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  職務経歴書
                </Link>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
