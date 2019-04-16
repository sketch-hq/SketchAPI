interface MSExportSheetItemUninitialized<InitializedType = MSExportSheetItem> extends NSCollectionViewItemUninitialized<MSExportSheetItem> {}

interface MSExportSheetItem extends NSCollectionViewItem {

  previewContainer(): NSView;
  setPreviewContainer(previewContainer: NSView): void;
  checkBox(): NSButton;
  setCheckBox(checkBox: NSButton): void;
  warningView(): NSImageView;
  setWarningView(warningView: NSImageView): void;
  exportSheet(): MSExportSheet;
  setExportSheet(exportSheet: MSExportSheet): void;
  showWarningLabel(): boolean;
  setShowWarningLabel(showWarningLabel: boolean): void;
  isExportable(): boolean;
  setIsExportable(isExportable: boolean): void;
}

declare const MSExportSheetItem: {
  alloc(): MSExportSheetItemUninitialized;
  class(): MSExportSheetItem;
}

