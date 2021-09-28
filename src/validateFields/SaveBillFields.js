import Notify from "../utils/Notify";

export const SaveBill = ({ state, holder, price }) => {
  const error = {};

  if (state === undefined || state.length === 0) {
    Notify({
      title: "Campo Estado es obligatorio",
      type: "error",
    });
    error.state = "err";
  }

  if (holder === undefined || holder.length === 0) {
    Notify({
      title: "Campo Titular es obligatorio",
      type: "error",
    });
    error.title = "err";
  }

  if (price === undefined || price.length === 0) {
    Notify({
      title: "Campo precio es obligatorio",
      type: "error",
    });
    error.price = "err";
  }

  return error;
};
