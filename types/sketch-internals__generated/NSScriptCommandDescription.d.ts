interface NSScriptCommandDescriptionUninitialized<InitializedType = NSScriptCommandDescription> extends NSObjectUninitialized<NSScriptCommandDescription> {
  initWithSuiteName_commandName_dictionary(suiteName: NSString | string, commandName: NSString | string, commandDeclaration: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSScriptCommandDescription extends NSObject, INSCoding {
  typeForArgumentWithName(argumentName: NSString | string): NSString;
  appleEventCodeForArgumentWithName(argumentName: NSString | string): number;
  isOptionalArgumentWithName(argumentName: NSString | string): boolean;
  createCommandInstance(): NSScriptCommand;
  createCommandInstanceWithZone(zone: NSZone | null): NSScriptCommand;
  encodeWithCoder(aCoder: NSCoder): void;

  suiteName(): NSString;
  commandName(): NSString;
  appleEventClassCode(): number;
  appleEventCode(): number;
  commandClassName(): NSString;
  returnType(): NSString;
  appleEventCodeForReturnType(): number;
  argumentNames(): NSArray<any>;
}

declare const NSScriptCommandDescription: {
  alloc(): NSScriptCommandDescriptionUninitialized;
  class(): NSScriptCommandDescription;
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

