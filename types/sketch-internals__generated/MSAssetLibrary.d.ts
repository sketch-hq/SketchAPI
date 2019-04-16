interface MSAssetLibraryUninitialized<InitializedType = MSAssetLibrary> extends NSObjectUninitialized<MSAssetLibrary> {
  initWithDocumentAtURL(url: NSURL): InitializedType;
  initWithName(name: NSString | string): InitializedType;
}
interface MSAssetLibrary extends NSObject, IBCSortable, INSCoding, IMSLibraryObject {
  resolveLocationOnDisk(): void;
  loadSynchronously(): boolean;
  loadAsyncWithDispatchGroup_completionHandler(dispatchGroup: dispatch_group_t | null, block: dispatch_block_t): void;
  unload(): void;
  handleAssetLibraryUpdateWithCompletionHandler(block: Block): void;

  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  valid(): boolean;
  status(): MSAssetLibraryStatus;
  setStatus(status: MSAssetLibraryStatus): void;
  locationOnDisk(): NSURL;
  setLocationOnDisk(locationOnDisk: NSURL): void;
  canLibraryBeRemoved(): boolean;
  document(): MSDocumentData;
  name(): NSString;
  libraryID(): NSString;
  delegate(): any;
  setDelegate(delegate: any): void;
  dateLastModified(): NSDate;
  libraryType(): MSAssetLibraryType;
  propertyListDictionaryRepresentation(): NSDictionary<any, any>;
  previewURL(): NSURL;
}
declare const MSAssetLibrary: {
  alloc(): MSAssetLibraryUninitialized;
  class(): MSAssetLibrary;  URLForTemplateLibraryNamed(name: NSString | string): NSURL;
  assetLibraryStatusForDocumentErrorCode(errorCode: MSDocumentErrorCode): MSAssetLibraryStatus;

}

