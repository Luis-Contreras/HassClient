import { Flex } from "@chakra-ui/layout";
import React from "react";
import Label from "../../components/Label";
import { billDate } from "../../constants/formatDate";

const Body = ({
  holder,
  weigth,
  createAt,
  price,
  priceByUnit,
  createBy,
  address,
}) => {
  return (
    <Flex mt="5px" height="200px" mb="5px" flexDir="column" w="100%">
      <Flex>
        <Label>Titular: </Label>
        <Label>{holder}</Label>
      </Flex>
      {weigth && (
        <Flex>
          <Label>Peso: </Label>
          <Label>{weigth}</Label>
        </Flex>
      )}
      <Flex>
        <Label>Fecha creación: </Label>
        <Label>{billDate(createAt)}</Label>
      </Flex>
      <Flex>
        <Label>Precio: </Label>
        <Label>{price}</Label>
      </Flex>
      {priceByUnit && (
        <Flex>
          <Label>Precio por unidad: </Label>
          <Label>{priceByUnit}</Label>
        </Flex>
      )}
      {createBy && (
        <Flex>
          <Label>Creado por: </Label>
          <Label>{createBy}</Label>
        </Flex>
      )}
      <Flex>
        <Label>Dirección: </Label>
        <Label>{address}</Label>
      </Flex>
    </Flex>
  );
};

export default Body;
