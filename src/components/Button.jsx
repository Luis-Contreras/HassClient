import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";
import { colors } from "../themes/colors";

const Button = ({ children, primary, ...props }) => {
  return (
    <ButtonChakra
      {...props}
      borderRadius={0}
      border="none"
      color="white"
      variant="solid"
      bg={primary ? colors.primaryColor : colors.secundaryColor}
      _hover={{
        bg: primary ? colors.primaryColorHover : colors.secundaryColorHover,
      }}
      _active={{
        bg: primary ? colors.primaryColorActive : colors.secundatyColorActive,
      }}
      width="full"
    >
      {children}
    </ButtonChakra>
  );
};

export default Button;
