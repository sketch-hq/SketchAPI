interface MSSliceExportGroupContentsOnlyInspectorItemUninitialized<InitializedType = MSSliceExportGroupContentsOnlyInspectorItem> extends MSInspectorItemUninitialized<MSSliceExportGroupContentsOnlyInspectorItem> {}

interface MSSliceExportGroupContentsOnlyInspectorItem extends MSInspectorItem {
}

declare const MSSliceExportGroupContentsOnlyInspectorItem: {
  alloc(): MSSliceExportGroupContentsOnlyInspectorItemUninitialized;
  class(): MSSliceExportGroupContentsOnlyInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSliceExportGroupContentsOnlyInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

