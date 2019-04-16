interface MSAssetLibraryUpdatingInfoUninitialized<InitializedType = MSAssetLibraryUpdatingInfo> extends NSObjectUninitialized<MSAssetLibraryUpdatingInfo> {
  initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize(downloadURL: NSURL, libraryName: NSString | string | null, imageURL: NSURL | null, newVersionNumber: NSString | string, shareLink: NSURL | null, downloadSize: NSUInteger): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface MSAssetLibraryUpdatingInfo extends NSObject, INSCoding {
  isEqual(object: any | null): boolean;
  isHigherVersionThan(otherVersion: NSString | string | null): boolean;
  encodeWithCoder(aCoder: NSCoder): void;

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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

