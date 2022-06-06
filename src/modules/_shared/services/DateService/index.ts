import { format, isToday } from 'date-fns';

const getFormattedDate = (date: number, formatString: string): string => {
  const parsedDate = format(new Date(date * 1000), formatString);

  return parsedDate;
};

const checkIfIsToday = (date: number): boolean => {
  return isToday(date * 1000);
};

export default { getFormattedDate, checkIfIsToday };
