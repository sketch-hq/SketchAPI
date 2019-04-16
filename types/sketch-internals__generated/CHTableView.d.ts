interface CHTableViewUninitialized<InitializedType = CHTableView> extends NSTableViewUninitialized<CHTableView> {}

interface CHTableView extends NSTableView {
}

declare const CHTableView: {
  alloc(): CHTableViewUninitialized;
  class(): CHTableView;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

