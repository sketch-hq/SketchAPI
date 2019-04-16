interface MSPositionInspectorItemUninitialized<InitializedType = MSPositionInspectorItem> extends MSInspectorItemUninitialized<MSPositionInspectorItem> {}

interface MSPositionInspectorItem extends MSInspectorItem {

  yField(): MSInlineUpDownTextField;
  rotationField(): MSInlineUpDownTextField;
}

declare const MSPositionInspectorItem: {
  alloc(): MSPositionInspectorItemUninitialized;
  class(): MSPositionInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSPositionInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

