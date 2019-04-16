interface NSLayoutYAxisAnchorUninitialized<InitializedType = NSLayoutYAxisAnchor> extends NSLayoutAnchorUninitialized<NSLayoutYAxisAnchor> {}
interface NSLayoutYAxisAnchor extends NSLayoutAnchor {
  anchorWithOffsetToAnchor(otherAnchor: NSLayoutYAxisAnchor): NSLayoutDimension;
}
declare const NSLayoutYAxisAnchor: {
  alloc(): NSLayoutYAxisAnchorUninitialized;
}

