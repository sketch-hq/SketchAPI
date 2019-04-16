interface MSImmutableLayoutGridUninitialized<InitializedType = MSImmutableLayoutGrid> extends _MSImmutableLayoutGridUninitialized<MSImmutableLayoutGrid> {}

interface MSImmutableLayoutGrid extends _MSImmutableLayoutGrid {
}

declare const MSImmutableLayoutGrid: {
  alloc(): MSImmutableLayoutGridUninitialized;
  class(): MSImmutableLayoutGrid;
}

