import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Label from "../components/Label";
import Logo from "../components/Logo";
import SignActions from "./SignActions";
import { useHistory } from "react-router";

const Navbar = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    const isLogin = () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        setUser(userData);
      }
    };

    isLogin();
  }, [setUser]);

  return (
    <Flex
      w="100%"
      boxShadow="dark-lg"
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      p="15px"
      position="sticky"
    >
      <Logo />
      {user ? (
        <Label
          onClick={() => {
            setUser("");
            localStorage.removeItem("userData");
            history.push("/");
            window.location.reload();
          }}
        >
          Cerrar Sesion
        </Label>
      ) : (
        <SignActions />
      )}
    </Flex>
  );
};

export default Navbar;
