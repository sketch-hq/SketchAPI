interface MSBottomGradientViewUninitialized<InitializedType = MSBottomGradientView> extends NSViewUninitialized<MSBottomGradientView> {}

interface MSBottomGradientView extends NSView {
}

declare const MSBottomGradientView: {
  alloc(): MSBottomGradientViewUninitialized;
  class(): MSBottomGradientView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

