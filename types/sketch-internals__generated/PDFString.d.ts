interface PDFStringUninitialized<InitializedType = PDFString> extends NSObjectUninitialized<PDFString> {
  initWithStringRef(stringRef: CGPDFStringRef): InitializedType;
}
interface PDFString extends NSObject {
  string(): NSString;
  data(): NSData;
  stringWithMap(map: NSDictionary<any, any> | {[key: string]: any}): NSString;
}
declare const PDFString: {
  alloc(): PDFStringUninitialized;
  class(): PDFString;
}

