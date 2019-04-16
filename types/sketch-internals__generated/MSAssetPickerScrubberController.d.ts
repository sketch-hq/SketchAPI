interface MSAssetPickerScrubberControllerUninitialized<InitializedType = MSAssetPickerScrubberController> extends NSObjectUninitialized<MSAssetPickerScrubberController> {
  initWithIdentifier(identifier: NSString | string): InitializedType;
}
interface MSAssetPickerScrubberController extends NSObject {
  reloadData(): void;

  identifier(): NSString;
  item(): NSTouchBarItem;
  dataSource(): MSAssetCollectionViewDataSource;
  setDataSource(dataSource: MSAssetCollectionViewDataSource): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSAssetPickerScrubberController: {
  alloc(): MSAssetPickerScrubberControllerUninitialized;
  class(): MSAssetPickerScrubberController;
}

