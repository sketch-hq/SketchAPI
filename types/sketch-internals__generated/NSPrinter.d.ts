interface NSPrinterUninitialized<InitializedType = NSPrinter> extends NSObjectUninitialized<NSPrinter> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSPrinter extends NSObject, INSCopying, INSCoding {
  pageSizeForPaper(paperName: NSPrinterPaperName): NSSize;
  statusForTable(tableName: NSString | string): NSPrinterTableStatus;
  isKey_inTable(key: NSString | string | null, table: NSString | string): boolean;
  booleanForKey_inTable(key: NSString | string | null, table: NSString | string): boolean;
  floatForKey_inTable(key: NSString | string | null, table: NSString | string): number;
  intForKey_inTable(key: NSString | string | null, table: NSString | string): number;
  rectForKey_inTable(key: NSString | string | null, table: NSString | string): NSRect;
  sizeForKey_inTable(key: NSString | string | null, table: NSString | string): NSSize;
  stringForKey_inTable(key: NSString | string | null, table: NSString | string): NSString;
  stringListForKey_inTable(key: NSString | string | null, table: NSString | string): NSArray<any>;
  imageRectForPaper(paperName: NSString | string | null): NSRect;
  acceptsBinary(): boolean;
  isColor(): boolean;
  isFontAvailable(faceName: NSString | string | null): boolean;
  isOutputStackInReverseOrder(): boolean;
  domain(): NSString;
  host(): NSString;
  note(): NSString;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  name(): NSString;
  type(): NSPrinterTypeName;
  languageLevel(): NSInteger;
  deviceDescription(): NSDictionary<any, any>;
}

declare const NSPrinter: {
  alloc(): NSPrinterUninitialized;
  class(): NSPrinter;
  printerWithName(name: NSString | string): NSPrinter;
  printerWithType(type: NSPrinterTypeName): NSPrinter;
  printerWithName_domain_includeUnavailable(name: NSString | string, domain: NSString | string | null, flag: boolean): NSPrinter;
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
  printerNames(): NSArray<any>;
  printerTypes(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

