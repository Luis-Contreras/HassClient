import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Card from "../../components/Card";
import { Flex } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { DeleteBillAction } from "../../api";
import Notify from "../../utils/Notify";
import Modal from "../../components/Modal";
import BillForm from "../BillForm";
import { useDisclosure } from "@chakra-ui/hooks";

const Bill = ({
  address,
  consecutive,
  createAt,
  createBy,
  holder,
  price,
  priceUnit,
  state,
  updateAt,
  updateBy,
  weight,
}) => {
  const [userData, setUserData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getUserData = async () => {
      const userisLogin = await JSON.parse(localStorage.getItem("userData"));
      setUserData(userisLogin);
    };

    getUserData();
  }, []);

  const deleteBill = async () => {
    if (!userData) {
      return Notify({
        title: `Ha ocurrido un error`,
        type: "error",
      });
    }

    const res = await DeleteBillAction(consecutive);
    if (res[0] > 0) {
      Notify({
        title: `Factura ${consecutive} eliminada correctamente`,
        type: "success",
      });
      window.location.reload();
    } else {
      Notify({
        title: `Factura ${consecutive} no se elimino correctamente`,
        type: "error",
      });
    }
  };

  return (
    <>
      <Card>
        <Flex w="100%" flexDir="column" p="10px">
          <Header consecutive={consecutive} state={state} createAt={createAt} />
          <Divider />
          <Body
            holder={holder}
            weigth={weight}
            createAt={createAt}
            price={price}
            priceByUnit={priceUnit}
            createBy={createBy}
            address={address}
          />
          {userData && <Footer updateBill={onOpen} deleteBill={deleteBill} />}
        </Flex>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} title="Modificar Factura">
        <BillForm
          isUpdate
          address={address}
          consecutive={consecutive}
          createAt={createAt}
          createBy={createBy}
          holder={holder}
          price={price}
          priceUnit={priceUnit}
          stateBill={state}
          updateAt={updateAt}
          updateBy={updateBy}
          weight={weight}
          onClose={onClose}
        />
      </Modal>
    </>
  );
};

export default Bill;
