interface SCKArtboardUninitialized<InitializedType = SCKArtboard> extends SCKObjectUninitialized<SCKArtboard> {}
interface SCKArtboard extends SCKObject {
  diffComparedTo(object: SCKArtboard): SCKArtboardDiff;

  page(): SCKPage;
  name(): NSString;
  slug(): NSString;
  order(): NSUInteger;
  unread(): NSUInteger;
  size(): CGSize;
  viewport(): SCKArtboardViewport;
  files(): NSArray<any>;
  possibleFileTypes(): SCKFileImageType;
  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
  isFlowHome(): boolean;
  setIsFlowHome(isFlowHome: boolean): void;
}
declare const SCKArtboard: {
  alloc(): SCKArtboardUninitialized;
  class(): SCKArtboard;
}

