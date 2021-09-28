import { Text } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../themes/colors";

const Label = ({ children, ...props }) => {
  return (
    <Text
      {...props}
      cursor="pointer"
      mr="2"
      fontSize="lg"
      color={colors.textColor}
    >
      {children}
    </Text>
  );
};

export default Label;
