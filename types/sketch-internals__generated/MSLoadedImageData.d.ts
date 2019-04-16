interface MSLoadedImageDataUninitialized<InitializedType = MSLoadedImageData> extends NSObjectUninitialized<MSLoadedImageData> {}
interface MSLoadedImageData extends NSObject {

  image(): MSImageData;
  setImage(image: MSImageData): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  intendedDPI(): NSInteger;
  setIntendedDPI(intendedDPI: NSInteger): void;
}
declare const MSLoadedImageData: {
  alloc(): MSLoadedImageDataUninitialized;
  class(): MSLoadedImageData;  imageFromPasteboard(pasteboard: NSPasteboard): MSLoadedImageData;
  imageFromFileURL(fileURL: NSURL): MSLoadedImageData;
  scalingFactorForFilename(filename: NSString | string): NSUInteger;

}

