interface NSRegularExpressionUninitialized<InitializedType = NSRegularExpression> extends NSObjectUninitialized<NSRegularExpression> {
  initWithPattern_options_error(pattern: NSString | string, options: NSRegularExpressionOptions, error: MOPointer<NSError>): InitializedType;
}

interface NSRegularExpression extends NSObject, INSCopying, INSSecureCoding {
  enumerateMatchesInString_options_range_usingBlock(string: NSString | string, options: NSMatchingOptions, range: NSRange, block: Block): void;
  matchesInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSArray<any>;
  numberOfMatchesInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSUInteger;
  firstMatchInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSTextCheckingResult;
  rangeOfFirstMatchInString_options_range(string: NSString | string, options: NSMatchingOptions, range: NSRange): NSRange;
  stringByReplacingMatchesInString_options_range_withTemplate(string: NSString | string, options: NSMatchingOptions, range: NSRange, templ: NSString | string): NSString;
  replaceMatchesInString_options_range_withTemplate(string: NSMutableString, options: NSMatchingOptions, range: NSRange, templ: NSString | string): NSUInteger;
  replacementStringForResult_inString_offset_template(result: NSTextCheckingResult, string: NSString | string, offset: NSInteger, templ: NSString | string): NSString;
  copyWithZone(zone: NSZone | null): any;

  pattern(): NSString;
  options(): NSRegularExpressionOptions;
  numberOfCaptureGroups(): NSUInteger;
}

declare const NSRegularExpression: {
  alloc(): NSRegularExpressionUninitialized;
  class(): NSRegularExpression;
  regularExpressionWithPattern_options_error(pattern: NSString | string, options: NSRegularExpressionOptions, error: MOPointer<NSError>): NSRegularExpression;
  escapedPatternForString(string: NSString | string): NSString;
  escapedTemplateForString(string: NSString | string): NSString;
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

