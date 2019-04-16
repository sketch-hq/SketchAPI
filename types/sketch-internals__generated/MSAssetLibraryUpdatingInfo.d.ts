interface MSAssetLibraryUpdatingInfoUninitialized<InitializedType = MSAssetLibraryUpdatingInfo> extends NSObjectUninitialized<MSAssetLibraryUpdatingInfo> {
  initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize(downloadURL: NSURL, libraryName: NSString | string | null, imageURL: NSURL | null, newVersionNumber: NSString | string, shareLink: NSURL | null, downloadSize: NSUInteger): InitializedType;
}
interface MSAssetLibraryUpdatingInfo extends NSObject, INSCoding {
  isEqual(object: any | null): boolean;
  isHigherVersionThan(otherVersion: NSString | string | null): boolean;

  downloadURL(): NSURL;
  versionNumberForUpdate(): NSString;
  downloadSize(): NSUInteger;
  libraryName(): NSString;
  imageURL(): NSURL;
  folderMonitor(): MSFolderMonitor;
  setFolderMonitor(folderMonitor: MSFolderMonitor): void;
  downloadTaskIdentifier(): NSString;
  setDownloadTaskIdentifier(downloadTaskIdentifier: NSString | string): void;
  shareLink(): NSURL;
}
declare const MSAssetLibraryUpdatingInfo: {
  alloc(): MSAssetLibraryUpdatingInfoUninitialized;
  class(): MSAssetLibraryUpdatingInfo;
}

