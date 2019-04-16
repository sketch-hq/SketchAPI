interface MSBaseSizeInspectorItemUninitialized<InitializedType = MSBaseSizeInspectorItem> extends MSInspectorItemUninitialized<MSBaseSizeInspectorItem> {}

interface MSBaseSizeInspectorItem extends MSInspectorItem {
  updateUI(): void;

  widthAdapter(): MSSizeInspectorValueAdaptor;
  setWidthAdapter(widthAdapter: MSSizeInspectorValueAdaptor): void;
  heightAdapter(): MSSizeInspectorValueAdaptor;
  setHeightAdapter(heightAdapter: MSSizeInspectorValueAdaptor): void;
  widthField(): MSInlineUpDownTextField;
  heightField(): MSInlineUpDownTextField;
}

declare const MSBaseSizeInspectorItem: {
  alloc(): MSBaseSizeInspectorItemUninitialized;
  class(): MSBaseSizeInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSBaseSizeInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

