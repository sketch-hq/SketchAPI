interface MOBridgeSupportArgumentUninitialized<InitializedType = MOBridgeSupportArgument> extends NSObjectUninitialized<MOBridgeSupportArgument> {}

interface MOBridgeSupportArgument extends NSObject {
  addArgument(argument: MOBridgeSupportArgument): void;
  removeArgument(argument: MOBridgeSupportArgument): void;

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  typeModifier(): NSString;
  setTypeModifier(typeModifier: NSString | string): void;
  signature(): NSString;
  setSignature(signature: NSString | string): void;
  signature64(): NSString;
  setSignature64(signature64: NSString | string): void;
  cArrayLengthInArg(): NSString;
  setCArrayLengthInArg(cArrayLengthInArg: NSString | string): void;
  cArrayOfFixedLength(): boolean;
  setCArrayOfFixedLength(cArrayOfFixedLength: boolean): void;
  cArrayDelimitedByNull(): boolean;
  setCArrayDelimitedByNull(cArrayDelimitedByNull: boolean): void;
  cArrayOfVariableLength(): boolean;
  setCArrayOfVariableLength(cArrayOfVariableLength: boolean): void;
  cArrayLengthInReturnValue(): boolean;
  setCArrayLengthInReturnValue(cArrayLengthInReturnValue: boolean): void;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  acceptsNull(): boolean;
  setAcceptsNull(acceptsNull: boolean): void;
  acceptsPrintfFormat(): boolean;
  setAcceptsPrintfFormat(acceptsPrintfFormat: boolean): void;
  alreadyRetained(): boolean;
  setAlreadyRetained(alreadyRetained: boolean): void;
  functionPointer(): boolean;
  setFunctionPointer(functionPointer: boolean): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  returnValue(): MOBridgeSupportArgument;
  setReturnValue(returnValue: MOBridgeSupportArgument): void;
}

declare const MOBridgeSupportArgument: {
  alloc(): MOBridgeSupportArgumentUninitialized;
  class(): MOBridgeSupportArgument;
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

