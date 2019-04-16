interface SUUpdaterUninitialized<InitializedType = SUUpdater> extends NSObjectUninitialized<SUUpdater> {
  initForBundle(bundle: NSBundle): InitializedType;
}

interface SUUpdater extends NSObject {
  checkForUpdates(sender: any): IBAction;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  checkForUpdatesInBackground(): void;
  checkForUpdateInformation(): void;
  installUpdatesIfAvailable(): void;
  resetUpdateCycle(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  automaticallyChecksForUpdates(): boolean;
  setAutomaticallyChecksForUpdates(automaticallyChecksForUpdates: boolean): void;
  automaticallyDownloadsUpdates(): boolean;
  setAutomaticallyDownloadsUpdates(automaticallyDownloadsUpdates: boolean): void;
  updateCheckInterval(): NSTimeInterval;
  setUpdateCheckInterval(updateCheckInterval: NSTimeInterval): void;
  feedURL(): NSURL;
  setFeedURL(feedURL: NSURL): void;
  hostBundle(): NSBundle;
  sparkleBundle(): NSBundle;
  userAgentString(): NSString;
  setUserAgentString(userAgentString: NSString | string): void;
  httpHeaders(): NSDictionary<any, any>;
  setHttpHeaders(httpHeaders: NSDictionary<any, any> | {[key: string]: any}): void;
  sendsSystemProfile(): boolean;
  setSendsSystemProfile(sendsSystemProfile: boolean): void;
  decryptionPassword(): NSString;
  setDecryptionPassword(decryptionPassword: NSString | string): void;
  lastUpdateCheckDate(): NSDate;
  updateInProgress(): boolean;
}

declare const SUUpdater: {
  alloc(): SUUpdaterUninitialized;
  class(): SUUpdater;
  sharedUpdater(): SUUpdater;
  updaterForBundle(bundle: NSBundle): SUUpdater;
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

