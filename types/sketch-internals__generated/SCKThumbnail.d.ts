interface SCKThumbnailUninitialized<InitializedType = SCKThumbnail> extends SCKObjectUninitialized<SCKThumbnail> {}

interface SCKThumbnail extends SCKObject {

  URL(): NSURL;
  dimensions(): CGSize;
  fileSize(): NSUInteger;
}

declare const SCKThumbnail: {
  alloc(): SCKThumbnailUninitialized;
  class(): SCKThumbnail;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

