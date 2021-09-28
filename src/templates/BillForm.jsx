import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { SaveBillAction, UpdateBillAction } from "../api";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import { state } from "../constants/state";
import { SaveBill } from "../validateFields/SaveBillFields";
import Notify from "../utils/Notify";

const BillForm = ({
  onClose,
  isUpdate,
  address,
  consecutive,
  holder,
  price,
  priceUnit,
  stateBill,
  weight,
}) => {
  const [user, setUser] = useState("");
  const [values, setValues] = isUpdate
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useState({
        address: address,
        holder: holder,
        price: price,
        priceUnit: priceUnit,
        state: stateBill,
        weight: weight,
      })
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useState({});

  useEffect(() => {
    const isLogin = async () => {
      const userData = await JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        setUser(userData);
      }
      if (isUpdate) {
        await setValues({ ...values, updateBy: userData.username });
      } else {
        await setValues({ ...values, createBy: userData.username });
      }
    };

    isLogin();
  }, [setUser]);

  const Save = async () => {
    const error = SaveBill(values);

    if (!user) {
      return Notify({
        title: "Algo inusual a ocurrido intentelo nuevamente",
        type: "warning",
      });
    }

    if (Object.keys(error).length !== 0) {
      return;
    }

    const data = (await isUpdate)
      ? UpdateBillAction(values, consecutive)
      : SaveBillAction(values);

    if (data) {
      Notify({
        title: "Factura generada",
        type: "success",
      });
      window.location.reload();
    } else {
      Notify({
        title: "Error generando factura",
        type: "success",
      });
      window.location.reload();
    }
  };

  return (
    <Flex flexDir="column">
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Estado*</Label>
        <Select
          id="state"
          name="state"
          defaultValue={values.state}
          options={state}
          onChange={(e) => setValues({ ...values, state: e.target.value })}
        />
      </Flex>
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Titular*</Label>
        <Input
          defaultValue={values.holder}
          placeholder="titular"
          type="text"
          onChange={(e) => setValues({ ...values, holder: e.target.value })}
        />
      </Flex>
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Peso</Label>
        <Input
          defaultValue={values.weight}
          placeholder="Peso"
          type="text"
          onChange={(e) => setValues({ ...values, weight: e.target.value })}
        />
      </Flex>
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Precio*</Label>
        <Input
          defaultValue={values.price}
          placeholder="Precio"
          type="text"
          onChange={(e) => setValues({ ...values, price: e.target.value })}
        />
      </Flex>
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Precio por unidad</Label>
        <Input
          defaultValue={values.priceUnit}
          placeholder="por unidad"
          type="text"
          onChange={(e) => setValues({ ...values, priceUnit: e.target.value })}
        />
      </Flex>
      <Flex mt="10px" flexDir="column" w="100%">
        <Label>Dirección</Label>
        <Input
          defaultValue={values.address}
          placeholder="direccion"
          type="text"
          onChange={(e) => setValues({ ...values, address: e.target.value })}
        />
      </Flex>
      <Flex justifyContent="flex-end" mb="30px" mt="30px">
        <Flex w="300px">
          <Button mr="10px" primary onClick={() => Save()}>
            {isUpdate ? "Modificar" : "Crear"}
          </Button>
          <Button onClick={() => onClose()}>Volver</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BillForm;
