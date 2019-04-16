interface NSAssertionHandlerUninitialized<InitializedType = NSAssertionHandler> extends NSObjectUninitialized<NSAssertionHandler> {}

interface NSAssertionHandler extends NSObject {
  handleFailureInMethod_object_file_lineNumber_description(selector: string, object: any, fileName: NSString | string, line: NSInteger, format: NSString | string | null, ...args: any[]): void;
  handleFailureInFunction_file_lineNumber_description(functionName: NSString | string, fileName: NSString | string, line: NSInteger, format: NSString | string | null, ...args: any[]): void;
}

declare const NSAssertionHandler: {
  alloc(): NSAssertionHandlerUninitialized;
  class(): NSAssertionHandler;
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
  currentHandler(): NSAssertionHandler;
  accessInstanceVariablesDirectly(): boolean;

}

