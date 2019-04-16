interface NSCIImageRepUninitialized<InitializedType = NSCIImageRep> extends NSImageRepUninitialized<NSCIImageRep> {
  initWithCIImage(image: CIImage): InitializedType;
}
interface NSCIImageRep extends NSImageRep {

  CIImage(): CIImage;
}
declare const NSCIImageRep: {
  alloc(): NSCIImageRepUninitialized;
  class(): NSCIImageRep;  imageRepWithCIImage(image: CIImage): NSCIImageRep;

}

