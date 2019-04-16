interface MSInspectorBackgroundViewUninitialized<InitializedType = MSInspectorBackgroundView> extends MSThemedColorViewUninitialized<MSInspectorBackgroundView> {}

interface MSInspectorBackgroundView extends MSThemedColorView {
}

declare const MSInspectorBackgroundView: {
  alloc(): MSInspectorBackgroundViewUninitialized;
  class(): MSInspectorBackgroundView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

