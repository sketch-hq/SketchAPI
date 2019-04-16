interface MSCustomShapeItemUninitialized<InitializedType = MSCustomShapeItem> extends MSInspectorItemUninitialized<MSCustomShapeItem> {}

interface MSCustomShapeItem extends MSInspectorItem {
  refreshAndResetAction(sender: any): IBAction;
}

declare const MSCustomShapeItem: {
  alloc(): MSCustomShapeItemUninitialized;
  class(): MSCustomShapeItem;
  itemForSection(section: MSBaseInspectorSection): MSCustomShapeItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
}

