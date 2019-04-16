interface MSArtboardBackgroundColorInspectorItemUninitialized<InitializedType = MSArtboardBackgroundColorInspectorItem> extends MSInspectorItemUninitialized<MSArtboardBackgroundColorInspectorItem> {}

interface MSArtboardBackgroundColorInspectorItem extends MSInspectorItem {
}

declare const MSArtboardBackgroundColorInspectorItem: {
  alloc(): MSArtboardBackgroundColorInspectorItemUninitialized;
  class(): MSArtboardBackgroundColorInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSArtboardBackgroundColorInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
}

