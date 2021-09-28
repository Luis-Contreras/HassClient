import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Logo = ({ onlyLogo }) => {
  return (
    <Flex alignItems="center" w="45px" ml="5">
      <img src="aguacate.svg" alt="logo" />
      {onlyLogo ? null : (
        <Text ml="5" fontSize="4xl" color="white">
          HASS
        </Text>
      )}
    </Flex>
  );
};

export default Logo;
