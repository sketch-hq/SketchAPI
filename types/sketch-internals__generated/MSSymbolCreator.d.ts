interface MSSymbolCreatorUninitialized<InitializedType = MSSymbolCreator> extends NSObjectUninitialized<MSSymbolCreator> {}
interface MSSymbolCreator extends NSObject {
}
declare const MSSymbolCreator: {
  alloc(): MSSymbolCreatorUninitialized;
  class(): MSSymbolCreator;  canCreateSymbolFromLayers(layers: MSLayerArray): boolean;
  createSymbolFromLayers_withName_onSymbolsPage(layers: MSLayerArray, name: NSString | string, useSymbolsPage: boolean): MSSymbolInstance;

}

