interface _MSImmutableLayoutGridUninitialized<InitializedType = _MSImmutableLayoutGrid> extends MSImmutableBaseGridUninitialized<_MSImmutableLayoutGrid> {}

interface _MSImmutableLayoutGrid extends MSImmutableBaseGrid {

  columnWidth(): CGFloat;
  drawHorizontal(): boolean;
  drawHorizontalLines(): boolean;
  drawVertical(): boolean;
  gutterHeight(): CGFloat;
  gutterWidth(): CGFloat;
  guttersOutside(): boolean;
  horizontalOffset(): CGFloat;
  numberOfColumns(): CGFloat;
  rowHeightMultiplication(): CGFloat;
  totalWidth(): CGFloat;
}

declare const _MSImmutableLayoutGrid: {
  alloc(): _MSImmutableLayoutGridUninitialized;
  class(): _MSImmutableLayoutGrid;
  displayableAtZoom(zoom: CGFloat): boolean;
}

