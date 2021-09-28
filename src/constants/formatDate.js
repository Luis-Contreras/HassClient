import moment from "moment";

export const billDate = (date) => {
  return moment(date, "YYYY/MM/DD").format("YYYY/MM/DD");
};

export const created = (date) => {
  const today = moment().format("YYYY/MM/DD");
  const billcreated = moment(date, "YYYY/MM/DD").format("YYYY/MM/DD");

  const diff = moment(today).diff(moment(billcreated), "days");

  return diff;
};
