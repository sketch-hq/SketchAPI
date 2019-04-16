interface MSLayoutInspectorItemUninitialized<InitializedType = MSLayoutInspectorItem> extends MSInspectorItemUninitialized<MSLayoutInspectorItem> {}

interface MSLayoutInspectorItem extends MSInspectorItem {
}

declare const MSLayoutInspectorItem: {
  alloc(): MSLayoutInspectorItemUninitialized;
  class(): MSLayoutInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSLayoutInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

