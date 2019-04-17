interface NSScannerUninitialized<InitializedType = NSScanner> extends NSObjectUninitialized<NSScanner> {
  initWithString(string: NSString | string): InitializedType;
}

interface NSScanner extends NSObject, INSCopying {
  scanDecimal(dcm: NSDecimal | null): boolean;
  scanInt(result: number | null): boolean;
  scanInteger(result: NSInteger | null): boolean;
  scanLongLong(result: number | null): boolean;
  scanUnsignedLongLong(result: number | null): boolean;
  scanFloat(result: number | null): boolean;
  scanDouble(result: number | null): boolean;
  scanHexInt(result: number | null): boolean;
  scanHexLongLong(result: number | null): boolean;
  scanHexFloat(result: number | null): boolean;
  scanHexDouble(result: number | null): boolean;
  scanString_intoString(string: NSString | string, result: MOPointer<NSString>): boolean;
  scanCharactersFromSet_intoString(set: NSCharacterSet, result: MOPointer<NSString>): boolean;
  scanUpToString_intoString(string: NSString | string, result: MOPointer<NSString>): boolean;
  scanUpToCharactersFromSet_intoString(set: NSCharacterSet, result: MOPointer<NSString>): boolean;
  copyWithZone(zone: NSZone | null): any;

  string(): NSString;
  scanLocation(): NSUInteger;
  setScanLocation(scanLocation: NSUInteger): void;
  charactersToBeSkipped(): NSCharacterSet;
  setCharactersToBeSkipped(charactersToBeSkipped: NSCharacterSet): void;
  caseSensitive(): boolean;
  setCaseSensitive(caseSensitive: boolean): void;
  locale(): any;
  setLocale(locale: any): void;
  atEnd(): boolean;
}

declare const NSScanner: {
  alloc(): NSScannerUninitialized;
  class(): NSScanner;
  scannerWithString(string: NSString | string): NSScanner;
  localizedScannerWithString(string: NSString | string): any;
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

