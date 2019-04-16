interface MSContentDrawViewParentUninitialized<InitializedType = MSContentDrawViewParent> extends NSViewUninitialized<MSContentDrawViewParent> {}

interface MSContentDrawViewParent extends NSView {

  contentDrawView(): MSContentDrawView;
  setContentDrawView(contentDrawView: MSContentDrawView): void;
}

declare const MSContentDrawViewParent: {
  alloc(): MSContentDrawViewParentUninitialized;
  class(): MSContentDrawViewParent;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

