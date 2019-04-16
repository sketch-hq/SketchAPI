interface MSOverrideInspectorItemUninitialized<InitializedType = MSOverrideInspectorItem> extends MSInspectorItemUninitialized<MSOverrideInspectorItem> {
  initWithPrimaryOverrideRepresentation(overrideRepresentation: MSOverrideRepresentation): InitializedType;
}

interface MSOverrideInspectorItem extends MSInspectorItem, IMSDataMenuProviderDelegate {
  labelView(): NSTextField;
  build(): void;
  controlViewForEditingOverride(): NSView;
  valueFromControlView(controlView: any): any;
  overrideValueAction(sender: any): IBAction;
  applyOverrideToSelectedLayers(value: any | null): void;
  setIndentationLevel(level: NSUInteger): void;
  refreshDataOnCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelectionRoot(sender: any): IBAction;
  clearDataRecordFromCurrentSelection(sender: any): IBAction;

  primaryOverride(): MSAvailableOverride;
  overrideRepresentation(): MSOverrideRepresentation;
  hasSingleOverride(): boolean;
  contentView(): NSView;
  documentData(): MSDocumentData;
  document(): MSDocument;
  displaysLabel(): boolean;
  setDisplaysLabel(displaysLabel: boolean): void;
  overrideItemForInspector(): MSAvailableOverride;
  setOverrideItemForInspector(overrideItemForInspector: MSAvailableOverride): void;
}

declare const MSOverrideInspectorItem: {
  alloc(): MSOverrideInspectorItemUninitialized;
  class(): MSOverrideInspectorItem;
  allOverridesInLayers_match(layers: MSLayerArray, availableOverride: MSAvailableOverride): boolean;
  heightForOverride_layers_shouldShowLabel_indentationLevel(overrideRepresentation: MSOverrideRepresentation, layers: MSLayerArray, shouldShowLabel: boolean, level: NSUInteger): CGFloat;
  itemForSection(section: MSBaseInspectorSection): MSOverrideInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

