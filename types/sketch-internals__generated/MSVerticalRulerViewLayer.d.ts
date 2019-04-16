interface MSVerticalRulerViewLayerUninitialized<InitializedType = MSVerticalRulerViewLayer> extends MSRulerViewLayerUninitialized<MSVerticalRulerViewLayer> {}

interface MSVerticalRulerViewLayer extends MSRulerViewLayer {
}

declare const MSVerticalRulerViewLayer: {
  alloc(): MSVerticalRulerViewLayerUninitialized;
  class(): MSVerticalRulerViewLayer;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

