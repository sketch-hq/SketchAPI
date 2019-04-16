interface MSAssetLibraryTableViewUninitialized<InitializedType = MSAssetLibraryTableView> extends BCKeyEventActionTableViewUninitialized<MSAssetLibraryTableView> {}

interface MSAssetLibraryTableView extends BCKeyEventActionTableView {
}

declare const MSAssetLibraryTableView: {
  alloc(): MSAssetLibraryTableViewUninitialized;
  class(): MSAssetLibraryTableView;
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

