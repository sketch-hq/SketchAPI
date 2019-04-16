interface SCKPageUninitialized<InitializedType = SCKPage> extends SCKObjectUninitialized<SCKPage> {}

interface SCKPage extends SCKObject {
  diffComparedTo(object: SCKPage): SCKPageDiff;

  document(): SCKDocument;
  name(): NSString;
  slug(): NSString;
  order(): NSUInteger;
  artboards(): NSArray<any>;
}

declare const SCKPage: {
  alloc(): SCKPageUninitialized;
  class(): SCKPage;
}

