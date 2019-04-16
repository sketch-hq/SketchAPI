interface NSScrubberItemViewUninitialized<InitializedType = NSScrubberItemView> extends NSScrubberArrangedViewUninitialized<NSScrubberItemView> {}

interface NSScrubberItemView extends NSScrubberArrangedView {
}

declare const NSScrubberItemView: {
  alloc(): NSScrubberItemViewUninitialized;
  class(): NSScrubberItemView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

