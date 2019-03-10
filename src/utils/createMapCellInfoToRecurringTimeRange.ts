import { DateRange, MapCellInfoToDateRange } from '../types';
import { range } from 'lodash';
import {
  addMinutes,
  isBefore,
  endOfDay,
  isEqual,
  subDays,
  startOfDay
} from 'date-fns';
import { cellToDate } from './cellToDate';

export type RecurringTimeRange = DateRange[];

export const createMapCellInfoToRecurringTimeRange: MapCellInfoToDateRange = ({
  fromY: toMin,
  fromX: toDay,
  originDate
}) => ({ id, startX, startY, endX, spanY }) => {
  const result = range(startX, endX + 1)
    .map(i => {
      const startDate = cellToDate({
        startX: i,
        startY,
        toMin,
        toDay,
        originDate
      });
      let endDate = addMinutes(startDate, toMin(spanY));

      if (isEqual(endDate, startOfDay(endDate))) {
        endDate = endOfDay(subDays(endDate, 1));
      }

      const value: [Date, Date] = isBefore(startDate, endDate)
        ? [startDate, endDate]
        : [endDate, startDate];

      return { id: id.range, value };
    })
    .sort((rangeA, rangeB) =>
      isBefore(rangeA.value[0], rangeB.value[0]) ? 0 : 1
    );

  return result;
};
