import { format } from 'date-fns';

const getFormattedDate = (date: number, formatString: string): string => {
  const parsedDate = format(new Date(date * 1000), formatString);

  return parsedDate;
};

export default { getFormattedDate };
