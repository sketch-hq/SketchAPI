interface MSLayoutDimensionUninitialized<InitializedType = MSLayoutDimension> extends MSLayoutAnchorUninitialized<MSLayoutDimension> {}
interface MSLayoutDimension extends MSLayoutAnchor {

  length(): CGFloat;
  vector(): CGVector;
}
declare const MSLayoutDimension: {
  alloc(): MSLayoutDimensionUninitialized;
  class(): MSLayoutDimension;
}

