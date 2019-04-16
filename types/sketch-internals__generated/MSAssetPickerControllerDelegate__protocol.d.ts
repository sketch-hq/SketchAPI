interface IMSAssetPickerControllerDelegate {
  assetPickerController_didSelectAsset(controller: MSAssetPickerController, asset: any): void;
  layoutChangedForAssetPickerCollection(controller: MSAssetPickerController): void;
  assetPickerController_didSelectDataSource(controller: MSAssetPickerController, dataSource: MSAssetCollectionViewDataSource): void;
  adjustFirstResponder(controller: MSAssetPickerController): void;
  allowAlternativeDisplayModesForAssetPickerController(controller: MSAssetPickerController): boolean;
  assetPickerController_shouldChangeToDisplayMode(controller: MSAssetPickerController, displayMode: MSAssetPickerDisplayMode): boolean;
}

