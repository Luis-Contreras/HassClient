import { Flex } from "@chakra-ui/layout";
import React from "react";
import Label from "../components/Label";
import { useHistory } from "react-router-dom";

const SignActions = () => {
  const history = useHistory();
  return (
    <Flex>
      <Label onClick={() => history.push("/login")}>Login</Label>
      <Label>|</Label>
      <Label onClick={() => history.push("/register")}>Registrarse</Label>
    </Flex>
  );
};

export default SignActions;
