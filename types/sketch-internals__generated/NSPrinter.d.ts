interface NSPrinterUninitialized<InitializedType = NSPrinter> extends NSObjectUninitialized<NSPrinter> {}
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

  name(): NSString;
  type(): NSPrinterTypeName;
  languageLevel(): NSInteger;
  deviceDescription(): NSDictionary<any, any>;
}
declare const NSPrinter: {
  alloc(): NSPrinterUninitialized;
  class(): NSPrinter;  printerWithName(name: NSString | string): NSPrinter;
  printerWithType(type: NSPrinterTypeName): NSPrinter;
  printerWithName_domain_includeUnavailable(name: NSString | string, domain: NSString | string | null, flag: boolean): NSPrinter;

  printerNames(): NSArray<any>;
  printerTypes(): NSArray<any>;

}

