export type Coords = { x: number; y: number };

export type CellInfo = {
  spanX: number;
  spanY: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export type DateRange = [Date, Date];

export type MapCellInfoToDateRange = (
  options: MapCellInfoToDateRangeOptions
) => (cellInfo: CellInfo) => DateRange[];

export type MapCellInfoToDateRangeOptions = {
  toMin: (y: number) => number;
  toDay: (x: number) => number;
  originDate: Date;
};

export type Grid = {
  cellHeight: number;
  cellWidth: number;
  getRectFromCell(cell: CellInfo): Rect;
  getCellFromRect(rect: Rect): CellInfo;
};

export type Rect = ClientRect & {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
};