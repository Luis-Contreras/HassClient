import { Flex } from "@chakra-ui/layout";
import React from "react";
import Button from "../../components/Button";

const Footer = ({ updateBill, deleteBill }) => {
  return (
    <Flex mt="30px">
      <Button onClick={() => updateBill()} mr="10px" primary>
        Editar
      </Button>
      <Button onClick={() => deleteBill()}>Eliminar</Button>
    </Flex>
  );
};

export default Footer;
