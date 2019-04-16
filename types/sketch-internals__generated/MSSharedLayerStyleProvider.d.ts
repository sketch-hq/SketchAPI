interface MSSharedLayerStyleProviderUninitialized<InitializedType = MSSharedLayerStyleProvider> extends MSForeignObjectProviderUninitialized<MSSharedLayerStyleProvider> {}

interface MSSharedLayerStyleProvider extends MSForeignObjectProvider {
}

declare const MSSharedLayerStyleProvider: {
  alloc(): MSSharedLayerStyleProviderUninitialized;
  class(): MSSharedLayerStyleProvider;
  providerForLayers_inDocument(layers: MSLayerArray, document: MSDocument): MSForeignObjectProvider;
  accessInstanceVariablesDirectly(): boolean;

}

