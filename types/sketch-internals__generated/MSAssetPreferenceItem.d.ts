interface MSAssetPreferenceItemUninitialized<InitializedType = MSAssetPreferenceItem> extends NSObjectUninitialized<MSAssetPreferenceItem> {}
interface MSAssetPreferenceItem extends NSObject {
  evaluateSecondaryTitle(): void;

  updatingStatus(): MSAssetLibraryUpdatingStatus;
  setUpdatingStatus(updatingStatus: MSAssetLibraryUpdatingStatus): void;
  updateAvailable(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  library(): MSAssetLibrary;
  remoteLibrary(): MSRemoteAssetLibrary;
  name(): NSString;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  validForSecondaryTextField(): boolean;
  preview(): NSImage;
  setPreview(preview: NSImage): void;
  secondaryTitle(): NSString;
  hasAppcastURL(): boolean;
  fileSize(): NSUInteger;
  setFileSize(fileSize: NSUInteger): void;
  downloadedSoFar(): NSUInteger;
  setDownloadedSoFar(downloadedSoFar: NSUInteger): void;
  missingRemoteLibraryWithNoInternet(): boolean;
}
declare const MSAssetPreferenceItem: {
  alloc(): MSAssetPreferenceItemUninitialized;
  class(): MSAssetPreferenceItem;  preferenceItemForLibrary(library: MSAssetLibrary): MSAssetPreferenceItem;

}

