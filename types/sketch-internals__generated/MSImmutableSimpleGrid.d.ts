interface MSImmutableSimpleGridUninitialized<InitializedType = MSImmutableSimpleGrid> extends _MSImmutableSimpleGridUninitialized<MSImmutableSimpleGrid> {}
interface MSImmutableSimpleGrid extends _MSImmutableSimpleGrid {
}
declare const MSImmutableSimpleGrid: {
  alloc(): MSImmutableSimpleGridUninitialized;
  class(): MSImmutableSimpleGrid;
}

