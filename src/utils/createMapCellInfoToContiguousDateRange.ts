import { MapCellInfoToDateRange } from '../types';
import { isBefore } from 'date-fns';
import { cellToDate } from './cellToDate';

export const createMapCellInfoToContiguousDateRange: MapCellInfoToDateRange = ({
  fromY: toMin,
  fromX: toDay,
  originDate
}) => ({ id, startX, startY, endX, endY }) => {
  const startDate = cellToDate({ startX, startY, toMin, toDay, originDate });
  const endDate = cellToDate({
    startX: endX,
    startY: endY,
    toMin,
    toDay,
    originDate
  });

  const value: [Date, Date] = isBefore(startDate, endDate)
    ? [startDate, endDate]
    : [endDate, startDate];

  return [{ id: id.range, value }];
};
