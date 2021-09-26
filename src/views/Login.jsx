import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "../components/Logo";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#2c2d2e"
      justifyContent="center"
      alignItems="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center">
        <Logo onlyLogo />
        <Heading color="#71c285">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                border="none"
                color="white"
                variant="solid"
                bg="#71c285"
                _hover={{ bg: "#4cb766" }}
                _active={{ bg: "#71df8c" }}
                width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="white">
        New to us?{" "}
        <Link color="#71c285" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
