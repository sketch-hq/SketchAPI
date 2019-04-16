interface CATransformLayerUninitialized<InitializedType = CATransformLayer> extends CALayerUninitialized<CATransformLayer> {}
interface CATransformLayer extends CALayer {
}
declare const CATransformLayer: {
  alloc(): CATransformLayerUninitialized;
  class(): CATransformLayer;
}

