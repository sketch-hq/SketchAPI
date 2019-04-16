interface MSForeignObjectProviderUninitialized<InitializedType = MSForeignObjectProvider> extends NSObjectUninitialized<MSForeignObjectProvider> {
  initWithDocument(document: MSDocument): InitializedType;
}
interface MSForeignObjectProvider extends NSObject, IMSForeignObjectProvider {
}
declare const MSForeignObjectProvider: {
  alloc(): MSForeignObjectProviderUninitialized;
  class(): MSForeignObjectProvider;  providerForLayers_inDocument(layers: MSLayerArray, document: MSDocument): MSForeignObjectProvider;

}

