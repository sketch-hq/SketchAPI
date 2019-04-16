interface MSInsetSeparatorViewUninitialized<InitializedType = MSInsetSeparatorView> extends NSViewUninitialized<MSInsetSeparatorView> {}

interface MSInsetSeparatorView extends NSView {
}

declare const MSInsetSeparatorView: {
  alloc(): MSInsetSeparatorViewUninitialized;
  class(): MSInsetSeparatorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

