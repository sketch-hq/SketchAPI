interface MSCrashLogManagerUninitialized<InitializedType = MSCrashLogManager> extends NSObjectUninitialized<MSCrashLogManager> {}

interface MSCrashLogManager extends NSObject, IMSActionObserver, IBITHockeyManagerDelegate, IBITCrashManagerDelegate {
  clearEnvironment(): void;
  setEnvironmentValue_forKey(value: NSString | string, key: NSString | string): void;
  log(text: NSString | string): void;
  setup(): boolean;
  actionController_willBeginActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didFinishActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didInstantActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  userIDForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
  userNameForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
  userEmailForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
  crashManagerWillSendCrashReport(crashManager: BITCrashManager): void;
  crashManager_didFailWithError(crashManager: BITCrashManager, error: NSError): void;
  crashManagerDidFinishSendingCrashReport(crashManager: BITCrashManager): void;

  text(): NSString;
}

declare const MSCrashLogManager: {
  alloc(): MSCrashLogManagerUninitialized;
  class(): MSCrashLogManager;
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

