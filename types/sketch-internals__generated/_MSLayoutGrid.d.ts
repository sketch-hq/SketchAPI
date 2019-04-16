interface _MSLayoutGridUninitialized<InitializedType = _MSLayoutGrid> extends MSBaseGridUninitialized<_MSLayoutGrid> {}

interface _MSLayoutGrid extends MSBaseGrid {

  columnWidth(): CGFloat;
  setColumnWidth(columnWidth: CGFloat): void;
  drawHorizontal(): boolean;
  setDrawHorizontal(drawHorizontal: boolean): void;
  drawHorizontalLines(): boolean;
  setDrawHorizontalLines(drawHorizontalLines: boolean): void;
  drawVertical(): boolean;
  setDrawVertical(drawVertical: boolean): void;
  gutterHeight(): CGFloat;
  setGutterHeight(gutterHeight: CGFloat): void;
  gutterWidth(): CGFloat;
  setGutterWidth(gutterWidth: CGFloat): void;
  guttersOutside(): boolean;
  setGuttersOutside(guttersOutside: boolean): void;
  horizontalOffset(): CGFloat;
  setHorizontalOffset(horizontalOffset: CGFloat): void;
  numberOfColumns(): CGFloat;
  setNumberOfColumns(numberOfColumns: CGFloat): void;
  rowHeightMultiplication(): CGFloat;
  setRowHeightMultiplication(rowHeightMultiplication: CGFloat): void;
  totalWidth(): CGFloat;
  setTotalWidth(totalWidth: CGFloat): void;
}

declare const _MSLayoutGrid: {
  alloc(): _MSLayoutGridUninitialized;
  class(): _MSLayoutGrid;
}

