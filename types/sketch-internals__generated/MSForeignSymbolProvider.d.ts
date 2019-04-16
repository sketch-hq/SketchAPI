interface MSForeignSymbolProviderUninitialized<InitializedType = MSForeignSymbolProvider> extends MSForeignObjectProviderUninitialized<MSForeignSymbolProvider> {}

interface MSForeignSymbolProvider extends MSForeignObjectProvider {
}

declare const MSForeignSymbolProvider: {
  alloc(): MSForeignSymbolProviderUninitialized;
  class(): MSForeignSymbolProvider;
  providerForLayers_inDocument(layers: MSLayerArray, document: MSDocument): MSForeignObjectProvider;
  accessInstanceVariablesDirectly(): boolean;

}

