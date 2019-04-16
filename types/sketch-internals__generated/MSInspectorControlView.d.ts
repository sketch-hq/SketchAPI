interface MSInspectorControlViewUninitialized<InitializedType = MSInspectorControlView> extends NSViewUninitialized<MSInspectorControlView> {}

interface MSInspectorControlView extends NSView {
}

declare const MSInspectorControlView: {
  alloc(): MSInspectorControlViewUninitialized;
  class(): MSInspectorControlView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

