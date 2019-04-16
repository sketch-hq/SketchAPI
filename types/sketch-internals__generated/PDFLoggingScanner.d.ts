interface PDFLoggingScannerUninitialized<InitializedType = PDFLoggingScanner> extends PDFScannerUninitialized<PDFLoggingScanner> {}

interface PDFLoggingScanner extends PDFScanner {
  log_method(string: NSString | string, method: string): void;
}

declare const PDFLoggingScanner: {
  alloc(): PDFLoggingScannerUninitialized;
  class(): PDFLoggingScanner;
  convertObject(object: CGPDFObjectRef): any;
  convertArray(array: CGPDFArrayRef): NSArray<any>;
  convertDictionary(dictionary: CGPDFDictionaryRef): NSDictionary<any, any>;
  accessInstanceVariablesDirectly(): boolean;

}

