interface MSDataTableViewUninitialized<InitializedType = MSDataTableView> extends BCKeyEventActionTableViewUninitialized<MSDataTableView> {}

interface MSDataTableView extends BCKeyEventActionTableView {
}

declare const MSDataTableView: {
  alloc(): MSDataTableViewUninitialized;
  class(): MSDataTableView;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

