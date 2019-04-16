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
  class(): NSLocale;  localeWithLocaleIdentifier(ident: NSString | string): NSLocale;
  componentsFromLocaleIdentifier(string: NSString | string): NSDictionary<any, any>;
  localeIdentifierFromComponents(dict: NSDictionary<any, any> | {[key: string]: any}): NSString;
  canonicalLocaleIdentifierFromString(string: NSString | string): NSString;
  canonicalLanguageIdentifierFromString(string: NSString | string): NSString;
  localeIdentifierFromWindowsLocaleCode(lcid: number): NSString;
  windowsLocaleCodeFromLocaleIdentifier(localeIdentifier: NSString | string): number;
  characterDirectionForLanguage(isoLangCode: NSString | string): NSLocaleLanguageDirection;
  lineDirectionForLanguage(isoLangCode: NSString | string): NSLocaleLanguageDirection;

  autoupdatingCurrentLocale(): NSLocale;
  currentLocale(): NSLocale;
  systemLocale(): NSLocale;
  availableLocaleIdentifiers(): NSArray<any>;
  ISOLanguageCodes(): NSArray<any>;
  ISOCountryCodes(): NSArray<any>;
  ISOCurrencyCodes(): NSArray<any>;
  commonISOCurrencyCodes(): NSArray<any>;
  preferredLanguages(): NSArray<any>;

}

