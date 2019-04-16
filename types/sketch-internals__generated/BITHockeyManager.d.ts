interface BITHockeyManagerUninitialized<InitializedType = BITHockeyManager> extends NSObjectUninitialized<BITHockeyManager> {}

interface BITHockeyManager extends NSObject {
  configureWithIdentifier(appIdentifier: NSString | string): void;
  configureWithIdentifier_delegate(appIdentifier: NSString | string, delegate: any): void;
  startManager(): void;
  setUserID(userID: NSString | string): void;
  setUserName(userName: NSString | string): void;
  setUserEmail(userEmail: NSString | string): void;
  setLogHandler(logHandler: BITLogHandler): void;
  testIdentifier(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  serverURL(): NSString;
  setServerURL(serverURL: NSString | string): void;
  crashManager(): BITCrashManager;
  disableCrashManager(): boolean;
  setDisableCrashManager(disableCrashManager: boolean): void;
  feedbackManager(): BITFeedbackManager;
  disableFeedbackManager(): boolean;
  setDisableFeedbackManager(disableFeedbackManager: boolean): void;
  metricsManager(): BITMetricsManager;
  disableMetricsManager(): boolean;
  setDisableMetricsManager(disableMetricsManager: boolean): void;
  logLevel(): BITLogLevel;
  setLogLevel(logLevel: BITLogLevel): void;
}

declare const BITHockeyManager: {
  alloc(): BITHockeyManagerUninitialized;
  class(): BITHockeyManager;
  sharedHockeyManager(): BITHockeyManager;
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

