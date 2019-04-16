interface MSLayerPasterUninitialized<InitializedType = MSLayerPaster> extends NSObjectUninitialized<MSLayerPaster> {}
interface MSLayerPaster extends NSObject {
}
declare const MSLayerPaster: {
  alloc(): MSLayerPasterUninitialized;
  class(): MSLayerPaster;  insertPasteboardData_onPage_withHint_viewPort(pboardData: MSPasteboardLayers, page: MSPage, destinationHint: MSLayer | null, viewport: MSPastingViewport): MSPastingViewport;
  insertPasteboardData_intoParent_atPosition_afterLayer_viewport_fitToParent(pboardData: MSPasteboardLayers, parent: MSLayerGroup, position: NSPoint, afterLayer: any, viewport: MSPastingViewport, fitToParent: boolean): MSLayerArray;
  insertPasteboardData_intoParent_atPosition_beforeLayer(pboardData: MSPasteboardLayers, parent: MSLayerGroup, atPosition: NSPoint, beforeLayer: any | null): MSLayerArray;
  insertPagePasteboardData_intoDocument_afterPage(pboardData: MSPasteboardLayers, document: MSDocumentData, afterPage: MSPage): MSLayerArray;
  parentForData_hint_page_viewPort(pboardData: MSPasteboardLayers, hint: MSLayer | null, page: MSPage, viewport: MSPastingViewport): MSLayerGroup;
  parentForData_hint_page(pboardData: MSPasteboardLayers, hint: MSLayer | null, page: MSPage): MSLayerGroup;
  duplicateLayers(layers: MSPasteboardLayers): MSPasteboardLayers;

}

