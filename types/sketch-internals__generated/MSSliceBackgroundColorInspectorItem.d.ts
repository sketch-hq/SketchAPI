interface MSSliceBackgroundColorInspectorItemUninitialized<InitializedType = MSSliceBackgroundColorInspectorItem> extends MSInspectorItemUninitialized<MSSliceBackgroundColorInspectorItem> {}

interface MSSliceBackgroundColorInspectorItem extends MSInspectorItem {
}

declare const MSSliceBackgroundColorInspectorItem: {
  alloc(): MSSliceBackgroundColorInspectorItemUninitialized;
  class(): MSSliceBackgroundColorInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSliceBackgroundColorInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

