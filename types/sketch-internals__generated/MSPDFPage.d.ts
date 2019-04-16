interface MSPDFPageUninitialized<InitializedType = MSPDFPage> extends NSObjectUninitialized<MSPDFPage> {
  initWithPDFData(PDFData: NSData): InitializedType;
}
interface MSPDFPage extends NSObject {

  pageRef(): CGPDFPageRef;
  size(): CGSize;
}
declare const MSPDFPage: {
  alloc(): MSPDFPageUninitialized;
  class(): MSPDFPage;
}

