interface SVGPathScannerUninitialized<InitializedType = SVGPathScanner> extends NSObjectUninitialized<SVGPathScanner> {
  initWithString(string: NSString | string): InitializedType;
}
interface SVGPathScanner extends NSObject {
  nextCommand(): string;
  nextFloat(): CGFloat;

  scanner(): NSScanner;
  setScanner(scanner: NSScanner): void;
}
declare const SVGPathScanner: {
  alloc(): SVGPathScannerUninitialized;
  class(): SVGPathScanner;
}

