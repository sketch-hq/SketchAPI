interface MSTableContainerInspectorItemUninitialized<InitializedType = MSTableContainerInspectorItem> extends MSInspectorItemUninitialized<MSTableContainerInspectorItem> {}

interface MSTableContainerInspectorItem extends MSInspectorItem {

  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
}

declare const MSTableContainerInspectorItem: {
  alloc(): MSTableContainerInspectorItemUninitialized;
  class(): MSTableContainerInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSTableContainerInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

