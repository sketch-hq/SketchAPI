interface MSBitmapResizeToOriginalItemUninitialized<InitializedType = MSBitmapResizeToOriginalItem> extends MSInspectorItemUninitialized<MSBitmapResizeToOriginalItem> {}

interface MSBitmapResizeToOriginalItem extends MSInspectorItem {
}

declare const MSBitmapResizeToOriginalItem: {
  alloc(): MSBitmapResizeToOriginalItemUninitialized;
  class(): MSBitmapResizeToOriginalItem;
  itemForSection(section: MSBaseInspectorSection): MSBitmapResizeToOriginalItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

