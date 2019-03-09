export type Coords = { x: number; y: number };

export type Event = Array<DateRange>;

export type CellInfo = {
  id: string;
  spanX: number;
  spanY: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export type DateRange = { id: string; value: [Date, Date] };

export type MapCellInfoToDateRange = (
  options: MapCellInfoToDateRangeOptions
) => (cellInfo: CellInfo) => DateRange[];

export type MapCellInfoToDateRangeOptions = {
  fromY: (y: number) => number;
  fromX: (x: number) => number;
  originDate: Date;
};

export type Grid = {
  cellHeight: number;
  cellWidth: number;
  totalWidth: number;
  totalHeight: number;
  numVerticalCells: number;
  numHorizontalCells: number;
  getRectFromCell(cell: CellInfo): Rect;
  getCellFromRect(rect: Rect): CellInfo;
};

export type Rect = ClientRect & {
  id: string;
  startX: number;
  endX: number;
  startY: number;
  endY: number;
};
