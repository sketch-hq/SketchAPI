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
  scanString_intoString(string: NSString | string, result: NSString | string): boolean;
  scanCharactersFromSet_intoString(set: NSCharacterSet, result: NSString | string): boolean;
  scanUpToString_intoString(string: NSString | string, result: NSString | string): boolean;
  scanUpToCharactersFromSet_intoString(set: NSCharacterSet, result: NSString | string): boolean;

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
  class(): NSScanner;  scannerWithString(string: NSString | string): NSScanner;
  localizedScannerWithString(string: NSString | string): any;

}

