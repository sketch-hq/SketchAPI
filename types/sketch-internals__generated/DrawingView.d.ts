interface DrawingViewUninitialized<InitializedType = DrawingView> extends NSViewUninitialized<DrawingView> {}

interface DrawingView extends NSView {
}

declare const DrawingView: {
  alloc(): DrawingViewUninitialized;
  class(): DrawingView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

