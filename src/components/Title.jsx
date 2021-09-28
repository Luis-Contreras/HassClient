import React from "react";
import { Heading } from "@chakra-ui/react";
import { colors } from "../themes/colors";

const Title = ({ children }) => {
  return <Heading color={colors.primaryColor}>{children}</Heading>;
};

export default Title;
