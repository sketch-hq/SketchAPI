interface NSScrubberSelectionViewUninitialized<InitializedType = NSScrubberSelectionView> extends NSScrubberArrangedViewUninitialized<NSScrubberSelectionView> {}

interface NSScrubberSelectionView extends NSScrubberArrangedView {
}

declare const NSScrubberSelectionView: {
  alloc(): NSScrubberSelectionViewUninitialized;
  class(): NSScrubberSelectionView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

