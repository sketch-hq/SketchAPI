interface CAConstraintUninitialized<InitializedType = CAConstraint> extends NSObjectUninitialized<CAConstraint> {
  initWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat): InitializedType;
}
interface CAConstraint extends NSObject, INSSecureCoding {

  attribute(): CAConstraintAttribute;
  sourceName(): NSString;
  sourceAttribute(): CAConstraintAttribute;
  scale(): CGFloat;
  offset(): CGFloat;
}
declare const CAConstraint: {
  alloc(): CAConstraintUninitialized;
  class(): CAConstraint;  constraintWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat): CAConstraint;
  constraintWithAttribute_relativeTo_attribute_offset(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute, c: CGFloat): CAConstraint;
  constraintWithAttribute_relativeTo_attribute(attr: CAConstraintAttribute, srcId: NSString | string, srcAttr: CAConstraintAttribute): CAConstraint;

}

