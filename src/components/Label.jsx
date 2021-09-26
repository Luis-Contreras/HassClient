import { Text } from "@chakra-ui/layout";
import React from "react";

const Label = ({ children, ...props }) => {
  return (
    <Text {...props} cursor="pointer" mr="2" fontSize="lg" color="white">
      {children}
    </Text>
  );
};

export default Label;
