interface NSPICTImageRepUninitialized<InitializedType = NSPICTImageRep> extends NSImageRepUninitialized<NSPICTImageRep> {
  initWithData(pictData: NSData): InitializedType;
}
interface NSPICTImageRep extends NSImageRep {

  PICTRepresentation(): NSData;
  boundingBox(): NSRect;
}
declare const NSPICTImageRep: {
  alloc(): NSPICTImageRepUninitialized;
  class(): NSPICTImageRep;  imageRepWithData(pictData: NSData): NSPICTImageRep;

}

