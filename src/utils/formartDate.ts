import { format } from "date-fns";

export const formatDateAndTime = (date: string) => {
  return date && format(new Date(date!), "EEE. do MMMM yyyy, hh:mma");
};
