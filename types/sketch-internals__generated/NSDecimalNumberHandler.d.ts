interface NSDecimalNumberHandlerUninitialized<InitializedType = NSDecimalNumberHandler> extends NSObjectUninitialized<NSDecimalNumberHandler> {
  initWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: NSRoundingMode, scale: number, exact: boolean, overflow: boolean, underflow: boolean, divideByZero: boolean): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSDecimalNumberHandler extends NSObject, INSDecimalNumberBehaviors, INSCoding {
  roundingMode(): NSRoundingMode;
  scale(): number;
  exceptionDuringOperation_error_leftOperand_rightOperand(operation: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand: NSDecimalNumber | null): NSDecimalNumber;
  encodeWithCoder(aCoder: NSCoder): void;
}

declare const NSDecimalNumberHandler: {
  alloc(): NSDecimalNumberHandlerUninitialized;
  class(): NSDecimalNumberHandler;
  decimalNumberHandlerWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: NSRoundingMode, scale: number, exact: boolean, overflow: boolean, underflow: boolean, divideByZero: boolean): NSDecimalNumberHandler;
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
  defaultDecimalNumberHandler(): NSDecimalNumberHandler;
  accessInstanceVariablesDirectly(): boolean;

}

