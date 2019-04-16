interface NSTaskUninitialized<InitializedType = NSTask> extends NSObjectUninitialized<NSTask> {}

interface NSTask extends NSObject {
  launchAndReturnError(error: MOPointer<NSError>): boolean;
  interrupt(): void;
  terminate(): void;
  suspend(): boolean;
  resume(): boolean;
  waitUntilExit(): void;
  launch(): void;

  executableURL(): NSURL;
  setExecutableURL(executableURL: NSURL): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  environment(): NSDictionary<any, any>;
  setEnvironment(environment: NSDictionary<any, any> | {[key: string]: any}): void;
  currentDirectoryURL(): NSURL;
  setCurrentDirectoryURL(currentDirectoryURL: NSURL): void;
  standardInput(): any;
  setStandardInput(standardInput: any): void;
  standardOutput(): any;
  setStandardOutput(standardOutput: any): void;
  standardError(): any;
  setStandardError(standardError: any): void;
  processIdentifier(): number;
  running(): boolean;
  terminationStatus(): number;
  terminationReason(): NSTaskTerminationReason;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  launchPath(): NSString;
  setLaunchPath(launchPath: NSString | string): void;
  currentDirectoryPath(): NSString;
  setCurrentDirectoryPath(currentDirectoryPath: NSString | string): void;
}

declare const NSTask: {
  alloc(): NSTaskUninitialized;
  class(): NSTask;
  launchedTaskWithExecutableURL_arguments_error_terminationHandler(url: NSURL, arguments: NSArray<any> | any[], error: MOPointer<NSError>, terminationHandler: Block): NSTask;
  launchedTaskWithLaunchPath_arguments(path: NSString | string, arguments: NSArray<any> | any[]): NSTask;
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

