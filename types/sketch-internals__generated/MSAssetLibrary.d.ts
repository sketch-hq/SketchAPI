interface MSAssetLibraryUninitialized<InitializedType = MSAssetLibrary> extends NSObjectUninitialized<MSAssetLibrary> {
  initWithDocumentAtURL(url: NSURL): InitializedType;
  initWithName(name: NSString | string): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface MSAssetLibrary extends NSObject, IBCSortable, INSCoding, IMSLibraryObject {
  resolveLocationOnDisk(): void;
  loadSynchronously(): boolean;
  loadAsyncWithDispatchGroup_completionHandler(dispatchGroup: dispatch_group_t | null, block: dispatch_block_t): void;
  unload(): void;
  handleAssetLibraryUpdateWithCompletionHandler(block: Block): void;
  encodeWithCoder(aCoder: NSCoder): void;

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
  class(): MSAssetLibrary;
  URLForTemplateLibraryNamed(name: NSString | string): NSURL;
  assetLibraryStatusForDocumentErrorCode(errorCode: MSDocumentErrorCode): MSAssetLibraryStatus;
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

