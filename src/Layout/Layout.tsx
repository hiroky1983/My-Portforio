import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React, { VFC } from "react";
import Sidebar from "../container/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = (props) => {
  return (
    <>
      <Flex>
        <Sidebar/>
        <Box h="100vh" w="100%" overflowY="scroll"  bg="#F2F2F2">
          {props.children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
