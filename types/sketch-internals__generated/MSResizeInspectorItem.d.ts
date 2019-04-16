interface MSResizeInspectorItemUninitialized<InitializedType = MSResizeInspectorItem> extends MSInspectorItemUninitialized<MSResizeInspectorItem> {}

interface MSResizeInspectorItem extends MSInspectorItem {
}

declare const MSResizeInspectorItem: {
  alloc(): MSResizeInspectorItemUninitialized;
  class(): MSResizeInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSResizeInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

