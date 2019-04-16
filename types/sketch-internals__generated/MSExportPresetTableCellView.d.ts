interface MSExportPresetTableCellViewUninitialized<InitializedType = MSExportPresetTableCellView> extends NSTableCellViewUninitialized<MSExportPresetTableCellView> {}
interface MSExportPresetTableCellView extends NSTableCellView {

  defaultPresetButton(): NSButton;
  setDefaultPresetButton(defaultPresetButton: NSButton): void;
}
declare const MSExportPresetTableCellView: {
  alloc(): MSExportPresetTableCellViewUninitialized;
  class(): MSExportPresetTableCellView;
}

