interface NSScriptCommandUninitialized<InitializedType = NSScriptCommand> extends NSObjectUninitialized<NSScriptCommand> {
  initWithCommandDescription(commandDef: NSScriptCommandDescription): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSScriptCommand extends NSObject, INSCoding {
  performDefaultImplementation(): any;
  executeCommand(): any;
  suspendExecution(): void;
  resumeExecutionWithResult(result: any | null): void;
  encodeWithCoder(aCoder: NSCoder): void;

  commandDescription(): NSScriptCommandDescription;
  directParameter(): any;
  setDirectParameter(directParameter: any): void;
  receiversSpecifier(): NSScriptObjectSpecifier;
  setReceiversSpecifier(receiversSpecifier: NSScriptObjectSpecifier): void;
  evaluatedReceivers(): any;
  arguments(): NSDictionary<any, any>;
  setArguments(arguments: NSDictionary<any, any> | {[key: string]: any}): void;
  evaluatedArguments(): NSDictionary<any, any>;
  wellFormed(): boolean;
  scriptErrorNumber(): NSInteger;
  setScriptErrorNumber(scriptErrorNumber: NSInteger): void;
  scriptErrorOffendingObjectDescriptor(): NSAppleEventDescriptor;
  setScriptErrorOffendingObjectDescriptor(scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor): void;
  scriptErrorExpectedTypeDescriptor(): NSAppleEventDescriptor;
  setScriptErrorExpectedTypeDescriptor(scriptErrorExpectedTypeDescriptor: NSAppleEventDescriptor): void;
  scriptErrorString(): NSString;
  setScriptErrorString(scriptErrorString: NSString | string): void;
  appleEvent(): NSAppleEventDescriptor;
}

declare const NSScriptCommand: {
  alloc(): NSScriptCommandUninitialized;
  class(): NSScriptCommand;
  currentCommand(): NSScriptCommand;
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

