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
  class(): NSEPSImageRep;  imageRepWithData(epsData: NSData): NSEPSImageRep;

}

