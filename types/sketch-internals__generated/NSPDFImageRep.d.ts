interface NSPDFImageRepUninitialized<InitializedType = NSPDFImageRep> extends NSImageRepUninitialized<NSPDFImageRep> {
  initWithData(pdfData: NSData): InitializedType;
}
interface NSPDFImageRep extends NSImageRep {

  PDFRepresentation(): NSData;
  bounds(): NSRect;
  currentPage(): NSInteger;
  setCurrentPage(currentPage: NSInteger): void;
  pageCount(): NSInteger;
}
declare const NSPDFImageRep: {
  alloc(): NSPDFImageRepUninitialized;
  class(): NSPDFImageRep;  imageRepWithData(pdfData: NSData): NSPDFImageRep;

}

