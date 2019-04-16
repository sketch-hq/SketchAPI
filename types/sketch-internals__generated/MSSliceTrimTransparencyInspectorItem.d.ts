interface MSSliceTrimTransparencyInspectorItemUninitialized<InitializedType = MSSliceTrimTransparencyInspectorItem> extends MSInspectorItemUninitialized<MSSliceTrimTransparencyInspectorItem> {}

interface MSSliceTrimTransparencyInspectorItem extends MSInspectorItem {
}

declare const MSSliceTrimTransparencyInspectorItem: {
  alloc(): MSSliceTrimTransparencyInspectorItemUninitialized;
  class(): MSSliceTrimTransparencyInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSliceTrimTransparencyInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

