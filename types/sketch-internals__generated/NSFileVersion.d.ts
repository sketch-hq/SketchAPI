interface NSFileVersionUninitialized<InitializedType = NSFileVersion> extends NSObjectUninitialized<NSFileVersion> {}

interface NSFileVersion extends NSObject {
  replaceItemAtURL_options_error(url: NSURL, options: NSFileVersionReplacingOptions, error: MOPointer<NSError>): NSURL;
  removeAndReturnError(outError: MOPointer<NSError>): boolean;

  URL(): NSURL;
  localizedName(): NSString;
  localizedNameOfSavingComputer(): NSString;
  originatorNameComponents(): NSPersonNameComponents;
  modificationDate(): NSDate;
  persistentIdentifier(): any;
  conflict(): boolean;
  resolved(): boolean;
  setResolved(resolved: boolean): void;
  discardable(): boolean;
  setDiscardable(discardable: boolean): void;
  hasLocalContents(): boolean;
  hasThumbnail(): boolean;
}

declare const NSFileVersion: {
  alloc(): NSFileVersionUninitialized;
  class(): NSFileVersion;
  currentVersionOfItemAtURL(url: NSURL): NSFileVersion;
  otherVersionsOfItemAtURL(url: NSURL): NSArray<any>;
  unresolvedConflictVersionsOfItemAtURL(url: NSURL): NSArray<any>;
  getNonlocalVersionsOfItemAtURL_completionHandler(url: NSURL, completionHandler: Block): void;
  versionOfItemAtURL_forPersistentIdentifier(url: NSURL, persistentIdentifier: any): NSFileVersion;
  addVersionOfItemAtURL_withContentsOfURL_options_error(url: NSURL, contentsURL: NSURL, options: NSFileVersionAddingOptions, outError: MOPointer<NSError>): NSFileVersion;
  temporaryDirectoryURLForNewVersionOfItemAtURL(url: NSURL): NSURL;
  removeOtherVersionsOfItemAtURL_error(url: NSURL, outError: MOPointer<NSError>): boolean;
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

