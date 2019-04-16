interface MSLayerArrayUninitialized<InitializedType = MSLayerArray> extends NSObjectUninitialized<MSLayerArray> {
  initWithLayers(layers: NSArray<any> | any[]): InitializedType;
}
interface MSLayerArray extends NSObject, IMSLayerContainment, INSFastEnumeration {
  addStylePartsOfType(type: MSStylePartType): NSArray<any>;
  removeUnusedStylePartsOfType(type: MSStylePartType): void;
  copyByGivingNewObjectIDs(): MSLayerArray;
  parentOfFirstLayer(): MSLayerGroup;
  uniqueParents(): MSLayerArray;
  effectivePage(): MSPage;
  effectiveArtboard(): MSArtboardGroup;
  layerToInsertAfter(): MSLayer;
  commonArtboard(): MSArtboardGroup;
  map(block: Block): MSLayerArray;
  filter(block: MSLayerFilterBlock): MSLayerArray;
  sortedArrayByUsingComparator(comparator: Block): MSLayerArray;
}
declare const MSLayerArray: {
  alloc(): MSLayerArrayUninitialized;
  class(): MSLayerArray;  arrayWithLayer(layer: MSLayer | null): MSLayerArray;
  arrayWithLayers(layers: NSArray<any> | any[]): MSLayerArray;
  emptyArray(): MSLayerArray;

}

