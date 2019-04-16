interface MSArtboardPresetInspectorItemUninitialized<InitializedType = MSArtboardPresetInspectorItem> extends MSInspectorItemUninitialized<MSArtboardPresetInspectorItem> {}

interface MSArtboardPresetInspectorItem extends MSInspectorItem {
}

declare const MSArtboardPresetInspectorItem: {
  alloc(): MSArtboardPresetInspectorItemUninitialized;
  class(): MSArtboardPresetInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSArtboardPresetInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
}

