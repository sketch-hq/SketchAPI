interface NSLayoutGuideUninitialized<InitializedType = NSLayoutGuide> extends NSObjectUninitialized<NSLayoutGuide> {}
interface NSLayoutGuide extends NSObject, INSCoding, INSUserInterfaceItemIdentification {
  constraintsAffectingLayoutForOrientation(orientation: NSLayoutConstraintOrientation): NSArray<any>;

  frame(): NSRect;
  owningView(): NSView;
  setOwningView(owningView: NSView): void;
  identifier(): NSUserInterfaceItemIdentifier;
  setIdentifier(identifier: NSUserInterfaceItemIdentifier): void;
  leadingAnchor(): NSLayoutXAxisAnchor;
  trailingAnchor(): NSLayoutXAxisAnchor;
  leftAnchor(): NSLayoutXAxisAnchor;
  rightAnchor(): NSLayoutXAxisAnchor;
  topAnchor(): NSLayoutYAxisAnchor;
  bottomAnchor(): NSLayoutYAxisAnchor;
  widthAnchor(): NSLayoutDimension;
  heightAnchor(): NSLayoutDimension;
  centerXAnchor(): NSLayoutXAxisAnchor;
  centerYAnchor(): NSLayoutYAxisAnchor;
  hasAmbiguousLayout(): boolean;
}
declare const NSLayoutGuide: {
  alloc(): NSLayoutGuideUninitialized;
  class(): NSLayoutGuide;
}

