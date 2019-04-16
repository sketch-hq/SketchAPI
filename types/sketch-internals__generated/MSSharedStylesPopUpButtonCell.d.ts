interface MSSharedStylesPopUpButtonCellUninitialized<InitializedType = MSSharedStylesPopUpButtonCell> extends NSPopUpButtonCellUninitialized<MSSharedStylesPopUpButtonCell> {}

interface MSSharedStylesPopUpButtonCell extends NSPopUpButtonCell {

  delegate(): any;
  setDelegate(delegate: any): void;
  localIsOutOfSync(): boolean;
  setLocalIsOutOfSync(localIsOutOfSync: boolean): void;
}

declare const MSSharedStylesPopUpButtonCell: {
  alloc(): MSSharedStylesPopUpButtonCellUninitialized;
  class(): MSSharedStylesPopUpButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

