interface NSRunningApplicationUninitialized<InitializedType = NSRunningApplication> extends NSObjectUninitialized<NSRunningApplication> {}

interface NSRunningApplication extends NSObject {
  hide(): boolean;
  unhide(): boolean;
  activateWithOptions(options: NSApplicationActivationOptions): boolean;
  terminate(): boolean;
  forceTerminate(): boolean;

  terminated(): boolean;
  finishedLaunching(): boolean;
  hidden(): boolean;
  active(): boolean;
  ownsMenuBar(): boolean;
  activationPolicy(): NSApplicationActivationPolicy;
  localizedName(): NSString;
  bundleIdentifier(): NSString;
  bundleURL(): NSURL;
  executableURL(): NSURL;
  processIdentifier(): pid_t;
  launchDate(): NSDate;
  icon(): NSImage;
  executableArchitecture(): NSInteger;
}

declare const NSRunningApplication: {
  alloc(): NSRunningApplicationUninitialized;
  class(): NSRunningApplication;
  runningApplicationsWithBundleIdentifier(bundleIdentifier: NSString | string): NSArray<any>;
  runningApplicationWithProcessIdentifier(pid: pid_t): NSRunningApplication;
  terminateAutomaticallyTerminableApplications(): void;
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
  currentApplication(): NSRunningApplication;
  accessInstanceVariablesDirectly(): boolean;

}

