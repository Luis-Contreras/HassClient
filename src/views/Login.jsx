import React, { useState } from "react";
import { Flex, Stack, Box, Link } from "@chakra-ui/react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import { IconLock, IconUser } from "../components/Icons";
import { colors } from "../themes/colors";
import { useHistory } from "react-router-dom";
import { LoginFields } from "../validateFields/LoginFields";
import { LoginAction } from "../api";
import Notify from "../utils/Notify";

const Login = () => {
  const [values, setValues] = useState({});
  const history = useHistory();

  const Login = async () => {
    const errors = LoginFields(values);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    const data = await LoginAction(values);

    if (!data) {
      Notify({
        title: "Usuario incorrecto",
        type: "warning",
      });
    }

    localStorage.setItem("userData", JSON.stringify(data));

    return history.push("/");
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#2c2d2e"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        boxShadow="dark-lg"
        borderRadius="15px"
        padding="20px"
      >
        <Logo onlyLogo />
        <Title>Bienvenido</Title>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Stack spacing={4} p="1rem" boxShadow="md">
            <Input
              Icon={IconUser}
              placeholder="correo"
              type="email"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <Input
              Icon={IconLock}
              placeholder="contraseña"
              type="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <Button primary onClick={() => Login()}>
              Ingresar
            </Button>
            <Button onClick={() => history.push("/")}>Volver</Button>
          </Stack>
        </Box>
      </Stack>
      <Box color="white">
        No tienes cuenta? <Link color={colors.primaryColor}>Registrarse</Link>
      </Box>
    </Flex>
  );
};

export default Login;
