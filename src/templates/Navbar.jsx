import { Flex } from "@chakra-ui/layout";
import React from "react";
import Logo from "../components/Logo";
import SignActions from "./SignActions";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      bg="black">
      <Logo />
      <SignActions />
    </Flex>
  );
};

export default Navbar;
