interface MSPasteboardLayersUninitialized<InitializedType = MSPasteboardLayers> extends NSObjectUninitialized<MSPasteboardLayers> {}
interface MSPasteboardLayers extends NSObject, IMSLayerTraits {
  insertOnPage_viewport_hint(page: MSPage, viewport: MSPastingViewport, destinationHint: MSLayer | null): MSPastingViewport;
  insertInGroup_atPosition_afterLayer_viewport_fitToParent(group: MSLayerGroup, position: NSPoint, afterLayer: any, viewport: MSPastingViewport | null, fitToParent: boolean): MSLayerArray;
  traits(): MSTraits;
  canBeContainedInLayer(layer: MSLayer): boolean;
  unionSize(): NSSize;
  layerPositionsRelativeToUnion(): NSArray<any>;
  suggestedRect(): NSRect;

  layers(): MSLayerArray;
  setLayers(layers: MSLayerArray): void;
  sharedStyles(): NSArray<any>;
  setSharedStyles(sharedStyles: NSArray<any> | any[]): void;
  localSymbols(): NSDictionary<any, any>;
  setLocalSymbols(localSymbols: NSDictionary<any, any> | {[key: string]: any}): void;
  foreignSymbols(): NSDictionary<any, any>;
  setForeignSymbols(foreignSymbols: NSDictionary<any, any> | {[key: string]: any}): void;
  suggestedPosition(): NSPoint;
  setSuggestedPosition(suggestedPosition: NSPoint): void;
  parentTraits(): MSTraits;
  setParentTraits(parentTraits: MSTraits): void;
}
declare const MSPasteboardLayers: {
  alloc(): MSPasteboardLayersUninitialized;
  class(): MSPasteboardLayers;  pasteboardLayersWithLayers(layers: NSArray<any> | any[]): MSPasteboardLayers;
  pasteboardLayersWithForeignLayers(layers: NSArray<any> | any[]): MSPasteboardLayers;

}

