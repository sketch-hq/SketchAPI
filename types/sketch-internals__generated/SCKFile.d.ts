interface SCKFileUninitialized<InitializedType = SCKFile> extends SCKObjectUninitialized<SCKFile> {}

interface SCKFile extends SCKObject {

  dimensions(): CGSize;
  fileSize(): NSUInteger;
  scale(): CGFloat;
  thumbnails(): NSArray<any>;
  url(): NSURL;
  type(): SCKFileImageType;
}

declare const SCKFile: {
  alloc(): SCKFileUninitialized;
  class(): SCKFile;
}

