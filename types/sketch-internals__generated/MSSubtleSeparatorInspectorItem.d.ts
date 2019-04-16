interface MSSubtleSeparatorInspectorItemUninitialized<InitializedType = MSSubtleSeparatorInspectorItem> extends MSInspectorItemUninitialized<MSSubtleSeparatorInspectorItem> {}

interface MSSubtleSeparatorInspectorItem extends MSInspectorItem {
}

declare const MSSubtleSeparatorInspectorItem: {
  alloc(): MSSubtleSeparatorInspectorItemUninitialized;
  class(): MSSubtleSeparatorInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSubtleSeparatorInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

