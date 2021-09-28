import Notify from "../utils/Notify";

export const LoginFields = ({ username, password }) => {
  const error = {};

  if (username === undefined || username.length === 0) {
    Notify({
      title: "Campo usuario es obligatorio",
      type: "error",
    });
    error.username = "err";
  }

  if (password === undefined || password.length === 0) {
    Notify({
      title: "Campo contraseña es obligatorio",
      type: "error",
    });
    error.password = "err";
  }

  return error;
};
