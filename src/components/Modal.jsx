import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../themes/colors";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <ModalChakra isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent color={colors.textColor} bg={colors.primaryBg}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
