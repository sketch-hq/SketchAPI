interface MSExportPresetTableCellViewUninitialized<InitializedType = MSExportPresetTableCellView> extends NSTableCellViewUninitialized<MSExportPresetTableCellView> {}

interface MSExportPresetTableCellView extends NSTableCellView {

  defaultPresetButton(): NSButton;
  setDefaultPresetButton(defaultPresetButton: NSButton): void;
}

declare const MSExportPresetTableCellView: {
  alloc(): MSExportPresetTableCellViewUninitialized;
  class(): MSExportPresetTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

