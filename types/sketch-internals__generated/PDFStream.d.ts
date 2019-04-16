interface PDFStreamUninitialized<InitializedType = PDFStream> extends NSObjectUninitialized<PDFStream> {
  initWithStream(stream: CGPDFStreamRef): InitializedType;
}
interface PDFStream extends NSObject {
  dictionary(): NSDictionary<any, any>;

  stream(): CGPDFStreamRef;
  format(): CGPDFDataFormat;
  data(): NSData;
  dictionary(): NSDictionary<any, any>;
}
declare const PDFStream: {
  alloc(): PDFStreamUninitialized;
  class(): PDFStream;
}

