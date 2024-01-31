import moment from "moment";

const formatDateShortMonth = (inputDate: string) => {
  const parsedDate = moment(inputDate, "DD/MM/YY");

  const formattedDate = parsedDate.format("DD MMM");

  return formattedDate;
};

export { formatDateShortMonth };
