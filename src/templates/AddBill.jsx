import { Flex } from "@chakra-ui/layout";
import React from "react";
import Card from "../components/Card";
import { IconPlus } from "../components/Icons";

const AddBill = ({ ...props }) => {
  return (
    <Card>
      <Flex
        {...props}
        w="100%"
        fontSize="120px"
        justifyContent="center"
        alignItems="center"
        color="gray"
      >
        <IconPlus />
      </Flex>
    </Card>
  );
};

export default AddBill;
