import React, { useState } from "react";
import {
  Input as InputChakra,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";

const Input = ({ type, placeholder, Icon, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <FormControl>
      <InputGroup>
        {Icon && (
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<Icon color="gray.300" />}
          />
        )}
        <InputChakra
          color="white"
          {...props}
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        {type === "password" && (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default Input;
