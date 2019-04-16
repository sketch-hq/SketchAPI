interface MSExportPreviewImagesInspectorItemUninitialized<InitializedType = MSExportPreviewImagesInspectorItem> extends MSInspectorItemUninitialized<MSExportPreviewImagesInspectorItem> {}

interface MSExportPreviewImagesInspectorItem extends MSInspectorItem {
}

declare const MSExportPreviewImagesInspectorItem: {
  alloc(): MSExportPreviewImagesInspectorItemUninitialized;
  class(): MSExportPreviewImagesInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSExportPreviewImagesInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

