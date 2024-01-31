import moment from "moment";

const formatDateShortMonth = (inputDate: string) => {
  const parsedDate = moment(inputDate, "DD/MM/YY");

  const formattedDate = parsedDate.format("DD MMM");

  return formattedDate;
};

const currentDate = new Date().toISOString().slice(0, 10);

export { formatDateShortMonth, currentDate };
