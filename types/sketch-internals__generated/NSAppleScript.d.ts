interface NSAppleScriptUninitialized<InitializedType = NSAppleScript> extends NSObjectUninitialized<NSAppleScript> {
  initWithContentsOfURL_error(url: NSURL, errorInfo: MOPointer<NSDictionary<any, any>>): InitializedType;
  initWithSource(source: NSString | string): InitializedType;
}

interface NSAppleScript extends NSObject, INSCopying {
  compileAndReturnError(errorInfo: MOPointer<NSDictionary<any, any>>): boolean;
  executeAndReturnError(errorInfo: MOPointer<NSDictionary<any, any>>): NSAppleEventDescriptor;
  executeAppleEvent_error(event: NSAppleEventDescriptor, errorInfo: MOPointer<NSDictionary<any, any>>): NSAppleEventDescriptor;
  copyWithZone(zone: NSZone | null): any;

  source(): NSString;
  compiled(): boolean;
  richTextSource(): NSAttributedString;
}

declare const NSAppleScript: {
  alloc(): NSAppleScriptUninitialized;
  class(): NSAppleScript;
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

