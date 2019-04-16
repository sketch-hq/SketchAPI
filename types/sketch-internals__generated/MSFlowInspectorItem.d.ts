interface MSFlowInspectorItemUninitialized<InitializedType = MSFlowInspectorItem> extends MSInspectorItemUninitialized<MSFlowInspectorItem> {}

interface MSFlowInspectorItem extends MSInspectorItem {
}

declare const MSFlowInspectorItem: {
  alloc(): MSFlowInspectorItemUninitialized;
  class(): MSFlowInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSFlowInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

