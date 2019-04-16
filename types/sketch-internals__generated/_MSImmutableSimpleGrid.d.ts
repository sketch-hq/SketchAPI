interface _MSImmutableSimpleGridUninitialized<InitializedType = _MSImmutableSimpleGrid> extends MSImmutableBaseGridUninitialized<_MSImmutableSimpleGrid> {}

interface _MSImmutableSimpleGrid extends MSImmutableBaseGrid {

  gridSize(): NSInteger;
  thickGridTimes(): NSInteger;
}

declare const _MSImmutableSimpleGrid: {
  alloc(): _MSImmutableSimpleGridUninitialized;
  class(): _MSImmutableSimpleGrid;
  displayableAtZoom(zoom: CGFloat): boolean;
}

