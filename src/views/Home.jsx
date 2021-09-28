import { Flex } from "@chakra-ui/react";
import React from "react";
import BillPanel from "../templates/BillPanel";
import Navbar from "../templates/Navbar";
import { colors } from "../themes/colors";

const Home = () => {
  return (
    <Flex flexDir="column" w="100%" h="100vh" bg={colors.primaryBg}>
      <Navbar />
      <BillPanel />
    </Flex>
  );
};

export default Home;
