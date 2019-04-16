interface MSLayoutGridUninitialized<InitializedType = MSLayoutGrid> extends _MSLayoutGridUninitialized<MSLayoutGrid> {}
interface MSLayoutGrid extends _MSLayoutGrid {
  totalNumberOfGutters(): NSInteger;
  determineAppropriateColumnWidth(): void;
}
declare const MSLayoutGrid: {
  alloc(): MSLayoutGridUninitialized;
  class(): MSLayoutGrid;
}

