interface IMSColorInspectorSectionDelegate {
  colorDidChangeTo(color: MSColor): void;
  inspectorSectionDidUpdate(pattern: MSColorInspectorSectionPattern): void;
  documentAssets(): MSAssetCollection;
  globalAssets(): MSPersistentAssetCollection;
  eventHandlerManager(): MSEventHandlerManager;
  stack(): void;
  didAddAsset(asset: any): void;
  didRemoveAssetOfType(assetType: MSAsset): void;
  touchBar(): NSTouchBar;
  libraryAssetsController(): MSLibraryAssetCollectionsController;
  revertToDefaultFirstResponder(): void;
  colorPickerController(): MSColorPickerViewController;

  document(): MSDocument;
}

