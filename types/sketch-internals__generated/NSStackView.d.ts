interface NSStackViewUninitialized<InitializedType = NSStackView> extends NSViewUninitialized<NSStackView> {}

interface NSStackView extends NSView {
  setCustomSpacing_afterView(spacing: CGFloat, view: NSView): void;
  customSpacingAfterView(view: NSView): CGFloat;
  addArrangedSubview(view: NSView): void;
  insertArrangedSubview_atIndex(view: NSView, index: NSInteger): void;
  removeArrangedSubview(view: NSView): void;
  setVisibilityPriority_forView(priority: NSStackViewVisibilityPriority, view: NSView): void;
  visibilityPriorityForView(view: NSView): NSStackViewVisibilityPriority;
  clippingResistancePriorityForOrientation(orientation: NSLayoutConstraintOrientation): NSLayoutPriority;
  setClippingResistancePriority_forOrientation(clippingResistancePriority: NSLayoutPriority, orientation: NSLayoutConstraintOrientation): void;
  huggingPriorityForOrientation(orientation: NSLayoutConstraintOrientation): NSLayoutPriority;
  setHuggingPriority_forOrientation(huggingPriority: NSLayoutPriority, orientation: NSLayoutConstraintOrientation): void;
  addView_inGravity(view: NSView, gravity: NSStackViewGravity): void;
  insertView_atIndex_inGravity(view: NSView, index: NSUInteger, gravity: NSStackViewGravity): void;
  removeView(view: NSView): void;
  viewsInGravity(gravity: NSStackViewGravity): NSArray<any>;
  setViews_inGravity(views: NSArray<any> | any[], gravity: NSStackViewGravity): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  orientation(): NSUserInterfaceLayoutOrientation;
  setOrientation(orientation: NSUserInterfaceLayoutOrientation): void;
  alignment(): NSLayoutAttribute;
  setAlignment(alignment: NSLayoutAttribute): void;
  edgeInsets(): NSEdgeInsets;
  setEdgeInsets(edgeInsets: NSEdgeInsets): void;
  distribution(): NSStackViewDistribution;
  setDistribution(distribution: NSStackViewDistribution): void;
  spacing(): CGFloat;
  setSpacing(spacing: CGFloat): void;
  detachesHiddenViews(): boolean;
  setDetachesHiddenViews(detachesHiddenViews: boolean): void;
  arrangedSubviews(): NSArray<any>;
  detachedViews(): NSArray<any>;
  views(): NSArray<any>;
  hasEqualSpacing(): boolean;
  setHasEqualSpacing(hasEqualSpacing: boolean): void;
}

declare const NSStackView: {
  alloc(): NSStackViewUninitialized;
  class(): NSStackView;
  stackViewWithViews(views: NSArray<any> | any[]): NSStackView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

