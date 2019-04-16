interface MSIncludeBackgroundColorInInstancesInspectorItemUninitialized<InitializedType = MSIncludeBackgroundColorInInstancesInspectorItem> extends MSInspectorItemUninitialized<MSIncludeBackgroundColorInInstancesInspectorItem> {}

interface MSIncludeBackgroundColorInInstancesInspectorItem extends MSInspectorItem {
}

declare const MSIncludeBackgroundColorInInstancesInspectorItem: {
  alloc(): MSIncludeBackgroundColorInInstancesInspectorItemUninitialized;
  class(): MSIncludeBackgroundColorInInstancesInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSIncludeBackgroundColorInInstancesInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

