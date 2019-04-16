interface IMSLayerContainment {
  containedLayers(): NSArray<any>;
  containedLayersCount(): NSUInteger;
  firstLayer(): any;
  lastLayer(): any;
  containsNoOrOneLayers(): boolean;
  containsLayers(): boolean;
  containsOneLayer(): boolean;
  containsMultipleLayers(): boolean;
  layerAtIndex(i: NSUInteger): MSLayer;
  indexOfLayer(aLayer: any): NSUInteger;
  enumerateLayers(block: MSLayerSimpleEnumeratorBlock): void;
  enumerateLayersWithOptions_block(options: MSLayerEnumeratorOptions, block: MSLayerEnumeratorBlock): boolean;
}

