interface MSFlowFixLayerInspectorItemUninitialized<InitializedType = MSFlowFixLayerInspectorItem> extends MSInspectorItemUninitialized<MSFlowFixLayerInspectorItem> {}

interface MSFlowFixLayerInspectorItem extends MSInspectorItem {
}

declare const MSFlowFixLayerInspectorItem: {
  alloc(): MSFlowFixLayerInspectorItemUninitialized;
  class(): MSFlowFixLayerInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSFlowFixLayerInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

