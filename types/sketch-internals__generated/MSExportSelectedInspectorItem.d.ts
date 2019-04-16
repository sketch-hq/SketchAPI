interface MSExportSelectedInspectorItemUninitialized<InitializedType = MSExportSelectedInspectorItem> extends MSInspectorItemUninitialized<MSExportSelectedInspectorItem> {}

interface MSExportSelectedInspectorItem extends MSInspectorItem {
}

declare const MSExportSelectedInspectorItem: {
  alloc(): MSExportSelectedInspectorItemUninitialized;
  class(): MSExportSelectedInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSExportSelectedInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

