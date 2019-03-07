import React, {
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  useCallback
} from 'react';
import ReactDOM from 'react-dom';
import { times, reject } from 'lodash';
import {
  format,
  startOfWeek,
  addDays,
  isAfter,
  isBefore,
  isEqual
} from 'date-fns';
import useComponentSize from '@rehooks/component-size';
import cc from 'classcat';

import { useClickAndDrag } from './useClickAndDrag';

import {
  RecurringTimeRange,
  createMapCellInfoToRecurringTimeRange
} from './createMapCellInfoToRecurringTimeRange';
import { createMapDateRangeToCells } from './createMapDateRangeToCells';
import { createGridForContainer } from './utils/createGridFromContainer';
import { getTextForDateRange } from './utils/getTextForDateRange';

import './styles.scss';
import { Grid, Event as CalendarEvent, CellInfo } from './types';
import { createMapCellInfoToContiguousDateRange } from './createMapCellInfoToContiguousDateRange';
import { mergeEvents, rejectOverlappingRanges } from './utils/mergeEvents';

const originDate = startOfWeek(new Date(), { weekStartsOn: 1 });

const MINS_IN_DAY = 24 * 60;
const verticalPrecision = 1 / 15;
const horizontalPrecision = 1;
const numVerticalCells = MINS_IN_DAY * verticalPrecision;
const numHorizontalCells = 7 * horizontalPrecision;
const toMin = (y: number) => y / verticalPrecision;
const fromY = toMin;
const toDay = (x: number) => x / horizontalPrecision;
const fromX = toDay;
const toX = (days: number) => days * horizontalPrecision;
const toY = (mins: number) => mins * verticalPrecision;

const springConfig = {
  mass: 0.5,
  tension: 200,
  friction: 10,
  clamp: false,
  precision: 0.01,
  velocity: 0
};

const isSameOrAfter = (date1: Date, date2: Date) =>
  isEqual(date1, date2) || isAfter(date1, date2);
const isSameOrBefore = (date1: Date, date2: Date) =>
  isEqual(date1, date2) || isBefore(date1, date2);

const cellInfoToDateRange = createMapCellInfoToRecurringTimeRange({
  originDate,
  toMin,
  toDay
});

const dateRangeToCells = createMapDateRangeToCells({
  originDate,
  numVerticalCells,
  numHorizontalCells,
  toX,
  toY
});

import Draggable, { DraggableEventHandler } from 'react-draggable';

type OnMoveCallback = (
  rangeIndex: number,
  cellIndex: number,
  newCell: CellInfo
) => void;

function Event({
  event,
  grid,
  className,
  onMove,
  isResizable,
  isDeletable,
  isBeingEdited
}: {
  event: CalendarEvent;
  grid: Grid;
  className?: string;
  isResizable?: boolean;
  isDeletable?: boolean;
  isBeingEdited?: (cell: CellInfo) => boolean;
  onMove?: OnMoveCallback;
}) {
  return (
    <div className="range-boxes">
      {event.map((dateRange, rangeIndex) => {
        return dateRangeToCells(dateRange).map((cell, cellIndex, array) => {
          const rect = grid.getRectFromCell(cell);
          const { top, left, width, height } = rect;
          const style = { width, height };

          const handleDrag: DraggableEventHandler = (e, { y, ...rest }) => {
            const _start = y;
            const _end = y + rect.height;
            const top = Math.min(_start, _end);
            const bottom = Math.max(_start, _end);

            const newRect = {
              ...rect,
              top,
              bottom,
              startY: top,
              endY: bottom
            };

            console.log(rect.height, newRect.bottom, { y });
            console.log(grid.totalHeight);

            onMove &&
              onMove(rangeIndex, cellIndex, grid.getCellFromRect(newRect));
          };

          return (
            <Draggable
              key={`(${cell.startX},${cell.startY})-(${cell.endX},${
                cell.endY
              })`}
              axis="y"
              bounds={{
                top: 0,
                bottom: grid.totalHeight - height,
                left: 0,
                right: grid.totalWidth
              }}
              defaultPosition={{ x: left, y: top }}
              onDrag={handleDrag}
            >
              <div
                className={cc([
                  'event',
                  'range-box',
                  className,
                  {
                    'is-draggable': true,
                    'is-pending-edit': isBeingEdited && isBeingEdited(cell)
                  }
                ])}
                style={style}
              >
                <span className="start">
                  {cellIndex === 0 && format(dateRange[0], 'h:mma')}
                </span>
                <span className="end">
                  {cellIndex === array.length - 1 &&
                    format(dateRange[1], 'h:mma')}
                </span>
              </div>
            </Draggable>
          );
        });
      })}
    </div>
  );
}

function App() {
  const parent = useRef<HTMLDivElement | null>(null);
  const size = useComponentSize(parent);
  const [schedule, setSchedule] = useState<CalendarEvent>(
    [
      ['2019-03-03T22:45:00.000Z', '2019-03-04T01:15:00.000Z'],
      ['2019-03-04T22:45:00.000Z', '2019-03-05T01:15:00.000Z'],
      ['2019-03-05T22:45:00.000Z', '2019-03-06T01:15:00.000Z'],
      ['2019-03-06T22:45:00.000Z', '2019-03-07T01:15:00.000Z'],
      ['2019-03-07T22:45:00.000Z', '2019-03-08T01:15:00.000Z'],
      ['2019-03-08T22:45:00.000Z', '2019-03-09T01:15:00.000Z'],
      ['2019-03-09T22:45:00.000Z', '2019-03-10T01:15:00.000Z']
    ].map(
      range => range.map(dateString => new Date(dateString)) as [Date, Date]
    )
  );
  const { style, box, isDragging, hasFinishedDragging } = useClickAndDrag(
    parent
  );
  const [dragBoxText, setDragBoxText] = useState('');
  const [
    pendingCreation,
    setPendingCreation
  ] = useState<RecurringTimeRange | null>(null);

  const grid = useMemo<Grid | null>(() => {
    if (!parent.current) {
      return null;
    }

    return createGridForContainer({
      container: parent.current,
      numHorizontalCells,
      numVerticalCells
    });
  }, [parent.current, size]);

  useLayoutEffect(() => {
    if (grid === null || box === null) {
      return;
    }

    const constrainedBox = box;
    const cell = grid.getCellFromRect(constrainedBox);
    const dateRanges = cellInfoToDateRange(cell);
    const event = dateRanges;
    console.log(event);
    console.log(event.map(d => getTextForDateRange(d)));
    setPendingCreation(event);
  }, [box, size]);

  const handleEventMove = useCallback<OnMoveCallback>(
    (rangeIndex, cellIndex, newCell) => {
      console.log(
        cellInfoToDateRange(newCell).map(range => getTextForDateRange(range))
      );
    },
    []
  );

  return (
    <div className="root">
      <div className="calendar header">
        {times(7).map(i => (
          <div className="day-column">
            <div className="cell title">
              {format(addDays(originDate, i), 'ddd')}
            </div>
          </div>
        ))}
      </div>
      <div className="layer-container">
        {grid && (
          <Event
            isResizable
            isDeletable
            isBeingEdited={cell =>
              pendingCreation !== null &&
              rejectOverlappingRanges(
                cellInfoToDateRange(cell),
                pendingCreation
              ).length == 0
            }
            onMove={handleEventMove}
            event={
              pendingCreation
                ? mergeEvents(schedule, pendingCreation)
                : schedule
            }
            grid={grid}
          />
        )}
        <div ref={parent} className="calendar">
          {(isDragging || hasFinishedDragging) && (
            <div className="drag-box" style={style}>
              {dragBoxText}
              {hasFinishedDragging && <div className="popup">Popup</div>}
            </div>
          )}
          {hasFinishedDragging && <div className="popup">Popup</div>}
          {grid && pendingCreation && (isDragging || hasFinishedDragging) && (
            <Event
              className="is-pending-creation"
              event={pendingCreation}
              grid={grid}
            />
          )}
          {times(7).map(x => {
            const cellInfo = createMapCellInfoToContiguousDateRange({
              originDate,
              toDay: toDay,
              toMin: y => y * 60
            });

            return (
              <div className="day-column">
                <div className="day-hours">
                  {times(24).map(y => {
                    const startY = y;
                    const range = cellInfo({
                      startX: x,
                      startY,
                      endX: x,
                      endY: startY + 1,
                      spanX: 1,
                      spanY: 1
                    });

                    const d = range.map(d => getTextForDateRange(d, 'h', 'ha'));

                    return (
                      <div className="cell">
                        <div className="debug">{d.join(', ')}</div>
                        <div className="debug">
                          ({x}, {y})
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
