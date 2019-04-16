interface MSExportPreviewHeaderInspectorItemUninitialized<InitializedType = MSExportPreviewHeaderInspectorItem> extends MSInspectorItemUninitialized<MSExportPreviewHeaderInspectorItem> {}

interface MSExportPreviewHeaderInspectorItem extends MSInspectorItem {

  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
  hideSeparator(): boolean;
  setHideSeparator(hideSeparator: boolean): void;
}

declare const MSExportPreviewHeaderInspectorItem: {
  alloc(): MSExportPreviewHeaderInspectorItemUninitialized;
  class(): MSExportPreviewHeaderInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSExportPreviewHeaderInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

