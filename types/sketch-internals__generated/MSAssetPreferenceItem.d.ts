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
  class(): MSAssetPreferenceItem;
  preferenceItemForLibrary(library: MSAssetLibrary): MSAssetPreferenceItem;
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

