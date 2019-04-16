interface MSBitmapLayerItemUninitialized<InitializedType = MSBitmapLayerItem> extends MSInspectorItemUninitialized<MSBitmapLayerItem> {}

interface MSBitmapLayerItem extends MSInspectorItem {
}

declare const MSBitmapLayerItem: {
  alloc(): MSBitmapLayerItemUninitialized;
  class(): MSBitmapLayerItem;
  itemForSection(section: MSBaseInspectorSection): MSBitmapLayerItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

