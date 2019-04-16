interface MSAssetPickerControllerUninitialized<InitializedType = MSAssetPickerController> extends NSViewControllerUninitialized<MSAssetPickerController> {}
interface MSAssetPickerController extends NSViewController {
  addAsset(asset: any): void;
  switchToDataSourceAtIndex(index: NSUInteger): void;
  setEffectiveDisplayMode_animated_completionHandler(effectiveDisplayMode: MSAssetPickerDisplayMode, animated: boolean, completionHandler: Block): void;
  reloadDataAndUpdateSize(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  dataSources(): NSArray<any>;
  setDataSources(dataSources: NSArray<any> | any[]): void;
  assetDisplayModeButton(): NSView;
  sectionHeaderLabelView(): NSView;
  currentDataSource(): MSAssetCollectionViewDataSource;
  highlightedAsset(): any;
  setHighlightedAsset(highlightedAsset: any): void;
  hasContent(): boolean;
}
declare const MSAssetPickerController: {
  alloc(): MSAssetPickerControllerUninitialized;
  class(): MSAssetPickerController;
}

