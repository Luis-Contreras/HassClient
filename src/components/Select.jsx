import React from "react";
import { SelectControl } from "formik-chakra-ui";
import { FormControl } from "@chakra-ui/react";
import { Formik } from "formik";
import { colors } from "../themes/colors";

const Select = ({
  options,
  id,
  label,
  name,
  defaultValue,
  placeholder = "Seleccione",
  ...props
}) => {
  return (
    <Formik initialValues={{}}>
      <FormControl>
        <SelectControl
          bg={colors.primaryBg}
          color={colors.textColor}
          {...props}
          id={id}
          name={name}
          selectProps={{ defaultValue: defaultValue, placeholder }}
          m={0}
        >
          {options?.map(({ id, name }) => (
            <option
              style={{ background: colors.primaryBg }}
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
        </SelectControl>
      </FormControl>
    </Formik>
  );
};

export default Select;
