interface MSManageForeignSymbolTableCellViewUninitialized<InitializedType = MSManageForeignSymbolTableCellView> extends NSTableCellViewUninitialized<MSManageForeignSymbolTableCellView> {}

interface MSManageForeignSymbolTableCellView extends NSTableCellView {
}

declare const MSManageForeignSymbolTableCellView: {
  alloc(): MSManageForeignSymbolTableCellViewUninitialized;
  class(): MSManageForeignSymbolTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

