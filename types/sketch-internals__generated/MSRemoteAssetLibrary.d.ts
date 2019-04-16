interface MSRemoteAssetLibraryUninitialized<InitializedType = MSRemoteAssetLibrary> extends MSAssetLibraryUninitialized<MSRemoteAssetLibrary> {
  initWithName_appcastURL_version_infoText(libraryName: NSString | string, appcastURL: NSURL, libraryVersion: NSString | string | null, infoText: NSString | string | null): InitializedType;
}

interface MSRemoteAssetLibrary extends MSAssetLibrary {
  assetLibraryUpdated(): void;

  appcastURL(): NSURL;
  setAppcastURL(appcastURL: NSURL): void;
  libraryVersion(): NSString;
  setLibraryVersion(libraryVersion: NSString | string): void;
  originalName(): NSString;
  infoText(): NSString;
  setInfoText(infoText: NSString | string): void;
  newUpdatingInfo(): boolean;
  setNewUpdatingInfo(newUpdatingInfo: boolean): void;
  updatingInfo(): MSAssetLibraryUpdatingInfo;
  setUpdatingInfo(updatingInfo: MSAssetLibraryUpdatingInfo): void;
  downloadAvailable(): boolean;
  updateAvailable(): boolean;
  fileName(): NSString;
}

declare const MSRemoteAssetLibrary: {
  alloc(): MSRemoteAssetLibraryUninitialized;
  class(): MSRemoteAssetLibrary;
  URLForApplicationSupportLibraryNamed(name: NSString | string): NSURL;
  URLForTemplateLibraryNamed(name: NSString | string): NSURL;
  assetLibraryStatusForDocumentErrorCode(errorCode: MSDocumentErrorCode): MSAssetLibraryStatus;
  assetLibraryFolder(): NSURL;
  accessInstanceVariablesDirectly(): boolean;

}

