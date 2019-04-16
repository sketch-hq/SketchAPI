interface MSArtboardPresetsTableViewUninitialized<InitializedType = MSArtboardPresetsTableView> extends NSTableViewUninitialized<MSArtboardPresetsTableView> {}

interface MSArtboardPresetsTableView extends NSTableView {
}

declare const MSArtboardPresetsTableView: {
  alloc(): MSArtboardPresetsTableViewUninitialized;
  class(): MSArtboardPresetsTableView;
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

