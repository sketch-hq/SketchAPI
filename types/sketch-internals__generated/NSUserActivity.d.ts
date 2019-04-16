interface NSUserActivityUninitialized<InitializedType = NSUserActivity> extends NSObjectUninitialized<NSUserActivity> {
  initWithActivityType(activityType: NSString | string): InitializedType;
}

interface NSUserActivity extends NSObject {
  addUserInfoEntriesFromDictionary(otherDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  becomeCurrent(): void;
  resignCurrent(): void;
  invalidate(): void;
  getContinuationStreamsWithCompletionHandler(completionHandler: Block): void;

  activityType(): NSString;
  title(): NSString;
  setTitle(title: NSString | string): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  requiredUserInfoKeys(): NSSet<any>;
  setRequiredUserInfoKeys(requiredUserInfoKeys: NSSet<any>): void;
  needsSave(): boolean;
  setNeedsSave(needsSave: boolean): void;
  webpageURL(): NSURL;
  setWebpageURL(webpageURL: NSURL): void;
  referrerURL(): NSURL;
  setReferrerURL(referrerURL: NSURL): void;
  expirationDate(): NSDate;
  setExpirationDate(expirationDate: NSDate): void;
  keywords(): NSSet<any>;
  setKeywords(keywords: NSSet<any>): void;
  supportsContinuationStreams(): boolean;
  setSupportsContinuationStreams(supportsContinuationStreams: boolean): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  eligibleForHandoff(): boolean;
  setEligibleForHandoff(eligibleForHandoff: boolean): void;
  eligibleForSearch(): boolean;
  setEligibleForSearch(eligibleForSearch: boolean): void;
  eligibleForPublicIndexing(): boolean;
  setEligibleForPublicIndexing(eligibleForPublicIndexing: boolean): void;
  eligibleForPrediction(): boolean;
  setEligibleForPrediction(eligibleForPrediction: boolean): void;
  persistentIdentifier(): NSUserActivityPersistentIdentifier;
  setPersistentIdentifier(persistentIdentifier: NSUserActivityPersistentIdentifier): void;
}

declare const NSUserActivity: {
  alloc(): NSUserActivityUninitialized;
  class(): NSUserActivity;
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

