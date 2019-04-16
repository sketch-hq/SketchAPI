interface NSLayoutXAxisAnchorUninitialized<InitializedType = NSLayoutXAxisAnchor> extends NSLayoutAnchorUninitialized<NSLayoutXAxisAnchor> {}
interface NSLayoutXAxisAnchor extends NSLayoutAnchor {
  anchorWithOffsetToAnchor(otherAnchor: NSLayoutXAxisAnchor): NSLayoutDimension;
}
declare const NSLayoutXAxisAnchor: {
  alloc(): NSLayoutXAxisAnchorUninitialized;
}

