import { isSameDay, format } from 'date-fns';
import { DateRange } from '../types';

export const getTextForDateRange = (
  { value }: DateRange,
  template?: string,
  template2?: string
) => {
  const start = value[0];
  const end = value[value.length - 1];

  if (isSameDay(start, end) && !template) {
    return `${format(start, 'ddd h:mma')} - ${format(end, 'h:mma')}`;
  }

  const formatTemplate = 'ddd h:mma';
  const startDateStr = format(start, template || formatTemplate);
  const endDateStr = format(end, template2 || formatTemplate);

  return `${startDateStr}-${endDateStr}`;
};
