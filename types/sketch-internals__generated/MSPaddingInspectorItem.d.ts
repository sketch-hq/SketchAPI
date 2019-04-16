interface MSPaddingInspectorItemUninitialized<InitializedType = MSPaddingInspectorItem> extends MSInspectorItemUninitialized<MSPaddingInspectorItem> {}

interface MSPaddingInspectorItem extends MSInspectorItem {

  wantsSeparator(): boolean;
  setWantsSeparator(wantsSeparator: boolean): void;
  wantsInsetSeparator(): boolean;
  setWantsInsetSeparator(wantsInsetSeparator: boolean): void;
}

declare const MSPaddingInspectorItem: {
  alloc(): MSPaddingInspectorItemUninitialized;
  class(): MSPaddingInspectorItem;
  paddingWithHeight(height: CGFloat): MSPaddingInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSPaddingInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

