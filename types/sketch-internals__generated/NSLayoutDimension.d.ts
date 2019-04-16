interface NSLayoutDimensionUninitialized<InitializedType = NSLayoutDimension> extends NSLayoutAnchorUninitialized<NSLayoutDimension> {}
interface NSLayoutDimension extends NSLayoutAnchor {
  constraintEqualToConstant(c: CGFloat): NSLayoutConstraint;
  constraintGreaterThanOrEqualToConstant(c: CGFloat): NSLayoutConstraint;
  constraintLessThanOrEqualToConstant(c: CGFloat): NSLayoutConstraint;
  constraintEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
  constraintEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
}
declare const NSLayoutDimension: {
  alloc(): NSLayoutDimensionUninitialized;
}

