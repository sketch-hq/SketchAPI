interface MSInstanceOverridesHeaderItemUninitialized<InitializedType = MSInstanceOverridesHeaderItem> extends MSInspectorItemUninitialized<MSInstanceOverridesHeaderItem> {}

interface MSInstanceOverridesHeaderItem extends MSInspectorItem {
}

declare const MSInstanceOverridesHeaderItem: {
  alloc(): MSInstanceOverridesHeaderItemUninitialized;
  class(): MSInstanceOverridesHeaderItem;
  itemForSection(section: MSBaseInspectorSection): MSInstanceOverridesHeaderItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

