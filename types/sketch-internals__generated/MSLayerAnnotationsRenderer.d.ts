interface MSLayerAnnotationsRendererUninitialized<InitializedType = MSLayerAnnotationsRenderer> extends MSOptionalRendererUninitialized<MSLayerAnnotationsRenderer> {}
interface MSLayerAnnotationsRenderer extends MSOptionalRenderer {
}
declare const MSLayerAnnotationsRenderer: {
  alloc(): MSLayerAnnotationsRendererUninitialized;
  class(): MSLayerAnnotationsRenderer;
}

