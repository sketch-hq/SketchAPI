interface MSArtboardContentResizeInspectorItemUninitialized<InitializedType = MSArtboardContentResizeInspectorItem> extends MSInspectorItemUninitialized<MSArtboardContentResizeInspectorItem> {}

interface MSArtboardContentResizeInspectorItem extends MSInspectorItem {
}

declare const MSArtboardContentResizeInspectorItem: {
  alloc(): MSArtboardContentResizeInspectorItemUninitialized;
  class(): MSArtboardContentResizeInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSArtboardContentResizeInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
}

