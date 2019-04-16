interface NSFormatterUninitialized<InitializedType = NSFormatter> extends NSObjectUninitialized<NSFormatter> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSFormatter extends NSObject, INSCopying, INSCoding {
  stringForObjectValue(obj: any | null): NSString;
  attributedStringForObjectValue_withDefaultAttributes(obj: any, attrs: NSDictionary<any, any> | {[key: string]: any} | null): NSAttributedString;
  editingStringForObjectValue(obj: any): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: NSString | string): boolean;
  isPartialStringValid_newEditingString_errorDescription(partialString: NSString | string, newString: NSString | string, error: NSString | string): boolean;
  isPartialStringValid_proposedSelectedRange_originalString_originalSelectedRange_errorDescription(partialStringPtr: NSString | string, proposedSelRangePtr: NSRangePointer | null, origString: NSString | string, origSelRange: NSRange, error: NSString | string): boolean;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;
}

declare const NSFormatter: {
  alloc(): NSFormatterUninitialized;
  class(): NSFormatter;
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

