interface BCRedLinedViewUninitialized<InitializedType = BCRedLinedView> extends NSViewUninitialized<BCRedLinedView> {}

interface BCRedLinedView extends NSView {
}

declare const BCRedLinedView: {
  alloc(): BCRedLinedViewUninitialized;
  class(): BCRedLinedView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

