interface MSDataTableCellViewUninitialized<InitializedType = MSDataTableCellView> extends NSTableCellViewUninitialized<MSDataTableCellView> {}

interface MSDataTableCellView extends NSTableCellView {

  dataPreferenceItem(): MSDataPreferenceItem;
}

declare const MSDataTableCellView: {
  alloc(): MSDataTableCellViewUninitialized;
  class(): MSDataTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

