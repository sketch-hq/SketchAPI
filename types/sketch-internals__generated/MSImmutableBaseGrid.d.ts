interface MSImmutableBaseGridUninitialized<InitializedType = MSImmutableBaseGrid> extends _MSImmutableBaseGridUninitialized<MSImmutableBaseGrid> {}

interface MSImmutableBaseGrid extends _MSImmutableBaseGrid {
  shouldDrawAtZoom(zoom: CGFloat): boolean;
}

declare const MSImmutableBaseGrid: {
  alloc(): MSImmutableBaseGridUninitialized;
  class(): MSImmutableBaseGrid;
  displayableAtZoom(zoom: CGFloat): boolean;
}

