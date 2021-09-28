import axios from "axios";
const endPoint = "http://localhost:4000";

export const LoginAction = async (data) => {
  const res = await axios.post(`${endPoint}/login`, data).then((res) => {
    const data = res.data;
    return data;
  });

  return res;
};

export const getBillAction = async () => {
  const res = await axios.get(`${endPoint}/products`).then((res) => {
    const data = res.data;
    return data;
  });

  return res;
};

export const SaveBillAction = async (data) => {
  const res = await axios.post(`${endPoint}/products`, data).then((res) => {
    const data = res.data;
    return data;
  });

  return res;
};

export const DeleteBillAction = async (data) => {
  const res = await axios.delete(`${endPoint}/products/${data}`).then((res) => {
    const data = res.data;
    return data;
  });

  return res;
};

export const UpdateBillAction = async (data, id) => {
  const res = await axios
    .put(`${endPoint}/products/${id}`, data)
    .then((res) => {
      const data = res.data;
      return data;
    });

  return res;
};
