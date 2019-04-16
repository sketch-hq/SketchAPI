interface MSLibraryAssetCollectionHelperUninitialized<InitializedType = MSLibraryAssetCollectionHelper> extends NSObjectUninitialized<MSLibraryAssetCollectionHelper> {
  initWithCollection_libraryIdentifier_name_assetType_dataURL_ioQueue(assetCollection: MSImmutableAssetCollection, libraryIdentifier: NSString | string, name: NSString | string, assetType: MSAsset, dataURL: NSURL, dispatchQueue: dispatch_queue_t): InitializedType;
}

interface MSLibraryAssetCollectionHelper extends NSObject {
  getIndexesOfNewAssets(callback: Block): void;
  markCollectionAsRead(callback: Block): void;
  dataSource(): MSAssetCollectionViewDataSource;

  libraryIdentifier(): NSString;
}

declare const MSLibraryAssetCollectionHelper: {
  alloc(): MSLibraryAssetCollectionHelperUninitialized;
  class(): MSLibraryAssetCollectionHelper;
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

