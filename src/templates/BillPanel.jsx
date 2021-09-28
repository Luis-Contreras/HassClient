import React, { useEffect, useState } from "react";
import Bill from "../templates/bill";
import AddBill from "./AddBill";
import { Flex } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import Modal from "../components/Modal";
import BillForm from "./BillForm";
import { getBillAction } from "../api";
import { colors } from "../themes/colors";

const BillPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const [user, setUser] = useState("");

  useEffect(() => {
    const isLogin = () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        setUser(userData);
      }
    };

    isLogin();
  }, [setUser]);

  useEffect(() => {
    const getBill = async () => {
      const res = await getBillAction();
      if (res) {
        setData(res);
      }
    };

    getBill();
  }, []);

  return (
    <Flex bg={colors.primaryBg} flexWrap="wrap" w="100%" p="40px">
      {user && <AddBill onClick={onOpen} />}
      {data && data.map((item) => <Bill {...item} />)}
      <Modal isOpen={isOpen} onClose={onClose} title="Crear nueva factura">
        <BillForm onClose={onClose} />
      </Modal>
    </Flex>
  );
};

export default BillPanel;
