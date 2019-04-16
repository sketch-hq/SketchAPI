interface MSIncludeBackgroundColorInExportInspectorItemUninitialized<InitializedType = MSIncludeBackgroundColorInExportInspectorItem> extends MSInspectorItemUninitialized<MSIncludeBackgroundColorInExportInspectorItem> {}

interface MSIncludeBackgroundColorInExportInspectorItem extends MSInspectorItem {
}

declare const MSIncludeBackgroundColorInExportInspectorItem: {
  alloc(): MSIncludeBackgroundColorInExportInspectorItemUninitialized;
  class(): MSIncludeBackgroundColorInExportInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSIncludeBackgroundColorInExportInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

