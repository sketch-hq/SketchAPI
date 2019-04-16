interface MSLineTransformInspectorItemUninitialized<InitializedType = MSLineTransformInspectorItem> extends MSInspectorItemUninitialized<MSLineTransformInspectorItem> {}

interface MSLineTransformInspectorItem extends MSInspectorItem {
}

declare const MSLineTransformInspectorItem: {
  alloc(): MSLineTransformInspectorItemUninitialized;
  class(): MSLineTransformInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSLineTransformInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

