interface MSImageDataUninitialized<InitializedType = MSImageData> extends NSObjectUninitialized<MSImageData> {
  initWithImage(image: NSImage): InitializedType;
  initWithData_sha(data: NSData, sha1: NSData | null): InitializedType;
  initWithLegacyHash(sha1: NSData): InitializedType;
}
interface MSImageData extends NSObject, INSCopying, IMSCoding, IMSJSONArchiverAlternativeFileReference {
  CGImageSuitableForDrawingWithSize_cache_owner(size: CGSize, cache: BCCache, owner: any): CGImageRef;
  CGImageInCache_owner(cache: BCCache, owner: any): CGImageRef;
  isLegacy(): boolean;
  imageDataByCorrectingInvalidGamma(): MSImageData;

  data(): NSData;
  sha1(): NSData;
  image(): NSImage;
}
declare const MSImageData: {
  alloc(): MSImageDataUninitialized;
  class(): MSImageData;
}

