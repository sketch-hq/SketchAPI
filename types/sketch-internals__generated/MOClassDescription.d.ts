interface MOClassDescriptionUninitialized<InitializedType = MOClassDescription> extends NSObjectUninitialized<MOClassDescription> {}

interface MOClassDescription extends NSObject {
  registerClass(): any;
  addInstanceVariableWithName_typeEncoding(name: NSString | string, typeEncoding: NSString | string): boolean;
  addClassMethodWithSelector_typeEncoding_block(selector: string, typeEncoding: NSString | string, block: any): boolean;
  addClassMethodWithSelector_function(selector: string, functionName: MOJavaScriptObject | Function): boolean;
  addInstanceMethodWithSelector_typeEncoding_block(selector: string, typeEncoding: NSString | string, block: any): boolean;
  addInstanceMethodWithSelector_function(selector: string, functionName: MOJavaScriptObject | Function): boolean;
  addProperty(property: MOPropertyDescription): boolean;
  addProtocol(protocol: MOProtocolDescription): void;

  name(): NSString;
  descriptedClass(): any;
  superclass(): MOClassDescription;
  ancestors(): NSArray<any>;
  instanceVariables(): NSArray<any>;
  instanceVariablesWithAncestors(): NSArray<any>;
  classMethods(): NSArray<any>;
  classMethodsWithAncestors(): NSArray<any>;
  instanceMethods(): NSArray<any>;
  instanceMethodsWithAncestors(): NSArray<any>;
  properties(): NSArray<any>;
  propertiesWithAncestors(): NSArray<any>;
  protocols(): NSArray<any>;
  protocolsWithAncestors(): NSArray<any>;
}

declare const MOClassDescription: {
  alloc(): MOClassDescriptionUninitialized;
  class(): MOClassDescription;
  descriptionForClassWithName(name: NSString | string): MOClassDescription;
  descriptionForClass(aClass: any): MOClassDescription;
  allocateDescriptionForClassWithName_superclass(name: NSString | string, superclass: any): MOClassDescription;
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

