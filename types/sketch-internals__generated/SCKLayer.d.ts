interface SCKLayerUninitialized<InitializedType = SCKLayer> extends SCKObjectUninitialized<SCKLayer> {}

interface SCKLayer extends SCKObject {
  diffComparedTo(object: SCKLayer): SCKLayerDiff;

  name(): NSString;
  boundingRect(): CGRect;
  flowConnection(): SCKFlowConnection;
  artboard(): SCKArtboard;
  isFixedToViewport(): boolean;
}

declare const SCKLayer: {
  alloc(): SCKLayerUninitialized;
  class(): SCKLayer;
}

