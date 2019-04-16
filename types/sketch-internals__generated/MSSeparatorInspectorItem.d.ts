interface MSSeparatorInspectorItemUninitialized<InitializedType = MSSeparatorInspectorItem> extends MSInspectorItemUninitialized<MSSeparatorInspectorItem> {}

interface MSSeparatorInspectorItem extends MSInspectorItem {
}

declare const MSSeparatorInspectorItem: {
  alloc(): MSSeparatorInspectorItemUninitialized;
  class(): MSSeparatorInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSeparatorInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

