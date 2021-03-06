import { MapCellInfoToDateRange, DateRange, CellInfo } from '../types';
import { createMapCellInfoToContiguousDateRange } from './createMapCellInfoToContiguousDateRange';
import { isSameDay, getDay, setDay } from 'date-fns';

const constrainToOneDay = ([start, end]: DateRange): DateRange => {
  if (!isSameDay(end, start)) {
    return [start, setDay(end, getDay(start))];
  }

  return [start, end];
};

export const createMapCellInfoToSingleDayRange: MapCellInfoToDateRange = options => {
  const mapToRange = createMapCellInfoToContiguousDateRange(options);
  return (info: CellInfo): DateRange[] => {
    return [constrainToOneDay(mapToRange(info)[0])];
  };
};
