interface MSPageUninitialized<InitializedType = MSPage> extends _MSPageUninitialized<MSPage> {}
interface MSPage extends _MSPage, IMSRootLayer {
  selectedLayers(): MSLayerArray;
  artboardWithID(objectID: any): MSArtboardGroup;
  isLayerSelected(layer: MSLayer): boolean;
  changeSelectionUsingBlock(block: MSSelectionModifierBlock): void;
  changeSelectionBySelectingLayers(layers: NSArray<any> | any[] | null): void;
  changeSelectionByDeselectingLayers(layers: NSArray<any> | any[] | null): void;
  addOrRemoveLayerFromArtboardIfNecessary(layer: MSLayer): boolean;
  tryToMoveLayer_toArtboards(layer: MSLayer, artboards: NSArray<any> | any[]): boolean;
  destinationArtboardForLayers_artboards(layers: NSArray<any> | any[], artboards: NSArray<any> | any[]): MSArtboardGroup;
  moveLayersToArtboards(): void;
  originForNewArtboardWithSize(size: NSSize): NSPoint;
  layersByObjectID(): NSDictionary<any, any>;
  contentIntersectsWithRect(rect: NSRect): boolean;
  resetSelectedLayerIDs(layerIDs: NSSet<any>): void;
  adjustRulerDataToTopLeftInViewBounds(): void;
  scrollOriginToCenterContentInViewBounds(viewBounds: NSRect): NSPoint;

  currentArtboard(): MSArtboardGroup;
  setCurrentArtboard(currentArtboard: MSArtboardGroup): void;
  artboards(): NSArray<any>;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
  scrollOrigin(): NSPoint;
  setScrollOrigin(scrollOrigin: NSPoint): void;
  symbols(): NSArray<any>;
  exportableLayers(): NSArray<any>;
  currentRoot(): MSLayerGroup;
}
declare const MSPage: {
  alloc(): MSPageUninitialized;
  class(): MSPage;  page(): MSPage;
  defaultSymbolsPageName(): NSString;

}

