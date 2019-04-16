interface NSEPSImageRepUninitialized<InitializedType = NSEPSImageRep> extends NSImageRepUninitialized<NSEPSImageRep> {
  initWithData(epsData: NSData): InitializedType;
}

interface NSEPSImageRep extends NSImageRep {
  prepareGState(): void;
  PDFRepresentation_ms(): NSData;

  EPSRepresentation(): NSData;
  boundingBox(): NSRect;
}

declare const NSEPSImageRep: {
  alloc(): NSEPSImageRepUninitialized;
  class(): NSEPSImageRep;
  imageRepWithData(epsData: NSData): NSEPSImageRep;
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

}

