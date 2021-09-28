import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { IconLigth } from "../../components/Icons";
import Label from "../../components/Label";
import { created } from "../../constants/formatDate";

const Header = ({ consecutive, state, createAt }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const createdDate = async () => {
      const date = await created(createAt);
      if (state === "compra" && date <= 1) {
        setColor("green");
      } else if (state === "compra" && date >= 2 && date <= 4) {
        setColor("yellow");
      } else if (state === "compra" && date >= 5) {
        setColor("red");
      }
    };

    createdDate();
  });

  return (
    <Flex flexDir="column" mb="5px" w="100px">
      <Flex>
        <Label>Consecutivo: </Label>
        <Label>{consecutive}</Label>
      </Flex>
      <Flex>
        <Label>Estado: </Label>
        <Label>{state}</Label>
        <Flex m="5px" color={color}>
          <IconLigth />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
