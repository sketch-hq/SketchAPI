interface MSLayerGroupItemUninitialized<InitializedType = MSLayerGroupItem> extends MSInspectorItemUninitialized<MSLayerGroupItem> {}

interface MSLayerGroupItem extends MSInspectorItem {
}

declare const MSLayerGroupItem: {
  alloc(): MSLayerGroupItemUninitialized;
  class(): MSLayerGroupItem;
  itemForSection(section: MSBaseInspectorSection): MSLayerGroupItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

