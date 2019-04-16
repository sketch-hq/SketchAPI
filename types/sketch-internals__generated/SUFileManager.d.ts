interface SUFileManagerUninitialized<InitializedType = SUFileManager> extends NSObjectUninitialized<SUFileManager> {}

interface SUFileManager extends NSObject {
  fileManagerByPreservingAuthorizationRights(): SUFileManager;
  makeTemporaryDirectoryWithPreferredName_appropriateForDirectoryURL_error(preferredName: NSString | string, appropriateURL: NSURL, error: MOPointer<NSError>): NSURL;
  makeDirectoryAtURL_error(targetURL: NSURL, error: MOPointer<NSError>): boolean;
  moveItemAtURL_toURL_error(sourceURL: NSURL, destinationURL: NSURL, error: MOPointer<NSError>): boolean;
  copyItemAtURL_toURL_error(sourceURL: NSURL, destinationURL: NSURL, error: MOPointer<NSError>): boolean;
  removeItemAtURL_error(url: NSURL, error: MOPointer<NSError>): boolean;
  changeOwnerAndGroupOfItemAtRootURL_toMatchURL_error(targetURL: NSURL, matchURL: NSURL, error: MOPointer<NSError>): boolean;
  updateModificationAndAccessTimeOfItemAtURL_error(targetURL: NSURL, error: MOPointer<NSError>): boolean;
  releaseItemFromQuarantineAtRootURL_error(rootURL: NSURL, error: MOPointer<NSError>): boolean;
  executePackageAtURL_progressBlock_error(packageURL: NSURL, progressBlock: Block | null, error: MOPointer<NSError>): boolean;
  _acquireAuthorizationWithError(error: NSError): boolean;
  _itemExistsAtURL(fileURL: NSURL): boolean;
  _itemExistsAtURL_isDirectory(fileURL: NSURL, isDirectory: boolean | null): boolean;
}

declare const SUFileManager: {
  alloc(): SUFileManagerUninitialized;
  class(): SUFileManager;
  defaultManager(): SUFileManager;
  fileManagerWithAuthorizationToolPath(authorizationToolPath: NSString | string): SUFileManager;
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

