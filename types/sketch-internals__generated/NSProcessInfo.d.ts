interface NSProcessInfoUninitialized<InitializedType = NSProcessInfo> extends NSObjectUninitialized<NSProcessInfo> {}

interface NSProcessInfo extends NSObject {
  operatingSystem(): NSUInteger;
  operatingSystemName(): NSString;
  isOperatingSystemAtLeastVersion(version: NSOperatingSystemVersion): boolean;
  disableSuddenTermination(): void;
  enableSuddenTermination(): void;
  disableAutomaticTermination(reason: NSString | string): void;
  enableAutomaticTermination(reason: NSString | string): void;
  beginActivityWithOptions_reason(options: NSActivityOptions, reason: NSString | string): any;
  endActivity(activity: any): void;
  performActivityWithOptions_reason_usingBlock(options: NSActivityOptions, reason: NSString | string, block: Block): void;
  performExpiringActivityWithReason_usingBlock(reason: NSString | string, block: Block): void;

  environment(): NSDictionary<any, any>;
  arguments(): NSArray<any>;
  hostName(): NSString;
  processName(): NSString;
  setProcessName(processName: NSString | string): void;
  processIdentifier(): number;
  globallyUniqueString(): NSString;
  operatingSystemVersionString(): NSString;
  operatingSystemVersion(): NSOperatingSystemVersion;
  processorCount(): NSUInteger;
  activeProcessorCount(): NSUInteger;
  physicalMemory(): number;
  systemUptime(): NSTimeInterval;
  automaticTerminationSupportEnabled(): boolean;
  setAutomaticTerminationSupportEnabled(automaticTerminationSupportEnabled: boolean): void;
  userName(): NSString;
  fullUserName(): NSString;
  thermalState(): NSProcessInfoThermalState;
  lowPowerModeEnabled(): boolean;
}

declare const NSProcessInfo: {
  alloc(): NSProcessInfoUninitialized;
  class(): NSProcessInfo;
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
  processInfo(): NSProcessInfo;
  runningTests(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

