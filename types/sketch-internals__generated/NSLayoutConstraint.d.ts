interface NSLayoutConstraintUninitialized<InitializedType = NSLayoutConstraint> extends NSObjectUninitialized<NSLayoutConstraint> {}
interface NSLayoutConstraint extends NSObject, INSAnimatablePropertyContainer {

  priority(): NSLayoutPriority;
  setPriority(priority: NSLayoutPriority): void;
  shouldBeArchived(): boolean;
  setShouldBeArchived(shouldBeArchived: boolean): void;
  firstItem(): any;
  firstAttribute(): NSLayoutAttribute;
  secondItem(): any;
  secondAttribute(): NSLayoutAttribute;
  firstAnchor(): NSLayoutAnchor;
  secondAnchor(): NSLayoutAnchor;
  relation(): NSLayoutRelation;
  multiplier(): CGFloat;
  constant(): CGFloat;
  setConstant(constant: CGFloat): void;
  active(): boolean;
  setActive(active: boolean): void;
  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
}
declare const NSLayoutConstraint: {
  alloc(): NSLayoutConstraintUninitialized;
  class(): NSLayoutConstraint;  constraintsWithVisualFormat_options_metrics_views(format: NSString | string, opts: NSLayoutFormatOptions, metrics: NSDictionary<any, any> | {[key: string]: any} | null, views: NSDictionary<any, any> | {[key: string]: any}): NSArray<any>;
  constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(view1: any, attr1: NSLayoutAttribute, relation: NSLayoutRelation, view2: any | null, attr2: NSLayoutAttribute, multiplier: CGFloat, c: CGFloat): NSLayoutConstraint;
  activateConstraints(constraints: NSArray<any> | any[]): void;
  deactivateConstraints(constraints: NSArray<any> | any[]): void;

}

