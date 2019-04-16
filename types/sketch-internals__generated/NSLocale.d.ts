interface NSLocaleUninitialized<InitializedType = NSLocale> extends NSObjectUninitialized<NSLocale> {
  initWithLocaleIdentifier(string: NSString | string): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSLocale extends NSObject, INSCopying, INSSecureCoding {
  objectForKey(key: NSLocaleKey): any;
  displayNameForKey_value(key: NSLocaleKey, value: any): NSString;
  localizedStringForLocaleIdentifier(localeIdentifier: NSString | string): NSString;
  localizedStringForLanguageCode(languageCode: NSString | string): NSString;
  localizedStringForCountryCode(countryCode: NSString | string): NSString;
  localizedStringForScriptCode(scriptCode: NSString | string): NSString;
  localizedStringForVariantCode(variantCode: NSString | string): NSString;
  localizedStringForCalendarIdentifier(calendarIdentifier: NSString | string): NSString;
  localizedStringForCollationIdentifier(collationIdentifier: NSString | string): NSString;
  localizedStringForCurrencyCode(currencyCode: NSString | string): NSString;
  localizedStringForCollatorIdentifier(collatorIdentifier: NSString | string): NSString;
  copyWithZone(zone: NSZone | null): any;

  localeIdentifier(): NSString;
  languageCode(): NSString;
  countryCode(): NSString;
  scriptCode(): NSString;
  variantCode(): NSString;
  exemplarCharacterSet(): NSCharacterSet;
  calendarIdentifier(): NSString;
  collationIdentifier(): NSString;
  usesMetricSystem(): boolean;
  decimalSeparator(): NSString;
  groupingSeparator(): NSString;
  currencySymbol(): NSString;
  currencyCode(): NSString;
  collatorIdentifier(): NSString;
  quotationBeginDelimiter(): NSString;
  quotationEndDelimiter(): NSString;
  alternateQuotationBeginDelimiter(): NSString;
  alternateQuotationEndDelimiter(): NSString;
}

declare const NSLocale: {
  alloc(): NSLocaleUninitialized;
  class(): NSLocale;
  localeWithLocaleIdentifier(ident: NSString | string): NSLocale;
  componentsFromLocaleIdentifier(string: NSString | string): NSDictionary<any, any>;
  localeIdentifierFromComponents(dict: NSDictionary<any, any> | {[key: string]: any}): NSString;
  canonicalLocaleIdentifierFromString(string: NSString | string): NSString;
  canonicalLanguageIdentifierFromString(string: NSString | string): NSString;
  localeIdentifierFromWindowsLocaleCode(lcid: number): NSString;
  windowsLocaleCodeFromLocaleIdentifier(localeIdentifier: NSString | string): number;
  characterDirectionForLanguage(isoLangCode: NSString | string): NSLocaleLanguageDirection;
  lineDirectionForLanguage(isoLangCode: NSString | string): NSLocaleLanguageDirection;
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
  autoupdatingCurrentLocale(): NSLocale;
  currentLocale(): NSLocale;
  systemLocale(): NSLocale;
  availableLocaleIdentifiers(): NSArray<any>;
  ISOLanguageCodes(): NSArray<any>;
  ISOCountryCodes(): NSArray<any>;
  ISOCurrencyCodes(): NSArray<any>;
  commonISOCurrencyCodes(): NSArray<any>;
  preferredLanguages(): NSArray<any>;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

