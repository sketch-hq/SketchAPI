interface NSLayoutAnchorUninitialized<InitializedType = NSLayoutAnchor> extends NSObjectUninitialized<NSLayoutAnchor> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSLayoutAnchor extends NSObject, INSCopying, INSCoding {
  constraintEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  copyWithZone(zone: NSZone): any;
  encodeWithCoder(aCoder: NSCoder): void;

  name(): NSString;
  setName(name: NSString): void;
  item(): any;
  setItem(item: any): void;
  hasAmbiguousLayout(): boolean;
  setHasAmbiguousLayout(hasAmbiguousLayout: boolean): void;
  constraintsAffectingLayout(): NSArray<any>;
  setConstraintsAffectingLayout(constraintsAffectingLayout: NSArray<any>): void;
}
declare const NSLayoutAnchor: {
  alloc(): NSLayoutAnchorUninitialized;
}

