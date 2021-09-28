import { Flex } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../themes/colors";

const Card = ({ children }) => {
  return (
    <Flex
      cursor="pointer"
      _hover={{ bg: colors.cardHover }}
      _active={{ bg: colors.cardActive }}
      borderRadius="20px"
      w="320px"
      h="370px"
      border="2px dashed gray"
      m="10px"
      boxShadow="dark-lg"
    >
      {children}
    </Flex>
  );
};

export default Card;
