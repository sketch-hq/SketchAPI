interface NSMeasurementUninitialized<UnitType, InitializedType = NSMeasurement<UnitType>> extends NSObjectUninitialized<NSMeasurement<UnitType>> {
  initWithDoubleValue_unit(doubleValue: number, unit: UnitType): InitializedType;
}

interface NSMeasurement<UnitType> extends NSObject, INSCopying, INSSecureCoding {
  canBeConvertedToUnit(unit: NSUnit): boolean;
  measurementByConvertingToUnit(unit: NSUnit): NSMeasurement<any>;
  measurementByAddingMeasurement(measurement: NSMeasurement<any>): NSMeasurement<any>;
  measurementBySubtractingMeasurement(measurement: NSMeasurement<any>): NSMeasurement<any>;
  copyWithZone(zone: NSZone | null): any;

  unit(): UnitType;
  doubleValue(): number;
}

declare const NSMeasurement: {
  alloc<UnitType>(): NSMeasurementUninitialized<UnitType>;
  class(): NSMeasurement;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

