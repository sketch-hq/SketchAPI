interface NSURLCredentialStorageUninitialized<InitializedType = NSURLCredentialStorage> extends NSObjectUninitialized<NSURLCredentialStorage> {}

interface NSURLCredentialStorage extends NSObject {
  credentialsForProtectionSpace(space: NSURLProtectionSpace): NSDictionary<any, any>;
  setCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  removeCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  removeCredential_forProtectionSpace_options(credential: NSURLCredential, space: NSURLProtectionSpace, options: NSDictionary<any, any> | {[key: string]: any} | null): void;
  defaultCredentialForProtectionSpace(space: NSURLProtectionSpace): NSURLCredential;
  setDefaultCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  getCredentialsForProtectionSpace_task_completionHandler(protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: Block): void;
  setCredential_forProtectionSpace_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;
  removeCredential_forProtectionSpace_options_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, options: NSDictionary<any, any> | {[key: string]: any} | null, task: NSURLSessionTask): void;
  getDefaultCredentialForProtectionSpace_task_completionHandler(space: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: Block): void;
  setDefaultCredential_forProtectionSpace_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;

  allCredentials(): NSDictionary<any, any>;
}

declare const NSURLCredentialStorage: {
  alloc(): NSURLCredentialStorageUninitialized;
  class(): NSURLCredentialStorage;
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
  sharedCredentialStorage(): NSURLCredentialStorage;
  accessInstanceVariablesDirectly(): boolean;

}

