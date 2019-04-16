interface MSColorInspectorSectionUninitialized<InitializedType = MSColorInspectorSection> extends NSViewControllerUninitialized<MSColorInspectorSection> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSColorInspectorSection extends NSViewController {
  createPresetFromCurrentSelection(): any;
  controlDidSelectAsset(asset: any): void;
  headerViews(): NSArray<any>;
  scrollableViews(): NSArray<any>;
  fillType(): BCFillType;
  isEnabled(): boolean;
  assetDataSourcesMighHaveChanged(): void;
  isAssetPickerCollapsed(): boolean;
  refreshAction(sender: any | null): IBAction;
  documentAssetPickerDataSourceWithAssetType_name_title(assetType: MSAsset, name: NSString | string, title: NSString | string): MSAssetCollectionViewDataSource;
  globalAssetPickerDataSourceWithAssetType_name_title(assetType: MSAsset, name: NSString | string, title: NSString | string): MSAssetCollectionViewDataSource;
  assetType(): MSAsset;
  validate(): void;
  popoverWillClose(): void;
  colorPickerChangedTo(color: MSColor): void;
  views(): NSArray<any>;
  minimumHeight(): CGFloat;
  customTouchBarItemIdentifiers(): NSArray<any>;
  makeTouchBarItemForIdentifier(identifier: NSString | string): NSTouchBarItem;

  assetPickerHeaderItem(): MSCollapsibleHeaderInspectorItem;
  assetPickerHeaderAccessoryViews(): NSArray<any>;
  addAssetButton(): NSButton;
  assetPickerController(): MSAssetPickerController;
  noContentController(): NSViewController;
  delegate(): any;
  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
}
declare const MSColorInspectorSection: {
  alloc(): MSColorInspectorSectionUninitialized;
  class(): MSColorInspectorSection;  drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor(r: NSRect, size: CGFloat, color: CGColorRef, backgroundColor: CGColorRef): void;

  presetPickerVisibilityDefaultsKey(): NSString;

}

