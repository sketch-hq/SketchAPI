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
  class(): NSPDFImageRep;
  imageRepWithData(pdfData: NSData): NSPDFImageRep;
  registerImageRepClass(imageRepClass: any): void;
  unregisterImageRepClass(imageRepClass: any): void;
  imageRepClassForFileType(type: NSString | string): any;
  imageRepClassForPasteboardType(type: NSPasteboardType): any;
  imageRepClassForType(type: NSString | string): any;
  imageRepClassForData(data: NSData): any;
  canInitWithData(data: NSData): boolean;
  imageUnfilteredFileTypes(): NSArray<any>;
  imageUnfilteredPasteboardTypes(): NSArray<any>;
  imageFileTypes(): NSArray<any>;
  imagePasteboardTypes(): NSArray<any>;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;
  imageRepsWithContentsOfFile(filename: NSString | string): NSArray<any>;
  imageRepWithContentsOfFile(filename: NSString | string): NSImageRep;
  imageRepsWithContentsOfURL(url: NSURL): NSArray<any>;
  imageRepWithContentsOfURL(url: NSURL): NSImageRep;
  imageRepsWithPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  imageRepWithPasteboard(pasteboard: NSPasteboard): NSImageRep;
  registeredImageRepClasses(): NSArray<any>;
  imageUnfilteredTypes(): NSArray<any>;
  imageTypes(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

