interface _MSSimpleGridUninitialized<InitializedType = _MSSimpleGrid> extends MSBaseGridUninitialized<_MSSimpleGrid> {}

interface _MSSimpleGrid extends MSBaseGrid {

  gridSize(): NSInteger;
  setGridSize(gridSize: NSInteger): void;
  thickGridTimes(): NSInteger;
  setThickGridTimes(thickGridTimes: NSInteger): void;
}

declare const _MSSimpleGrid: {
  alloc(): _MSSimpleGridUninitialized;
  class(): _MSSimpleGrid;
}

