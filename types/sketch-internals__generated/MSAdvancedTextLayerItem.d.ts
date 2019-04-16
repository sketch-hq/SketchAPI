interface MSAdvancedTextLayerItemUninitialized<InitializedType = MSAdvancedTextLayerItem> extends MSInspectorItemUninitialized<MSAdvancedTextLayerItem> {}

interface MSAdvancedTextLayerItem extends MSInspectorItem {
  decorationButtonAction(sender: any): IBAction;
  transformPopUpAction(sender: any): IBAction;

  textItem(): MSTextLayerItem;
  setTextItem(textItem: MSTextLayerItem): void;
  decorationButton(): NSPopUpButton;
  setDecorationButton(decorationButton: NSPopUpButton): void;
  transformControl(): NSSegmentedControl;
  setTransformControl(transformControl: NSSegmentedControl): void;
}

declare const MSAdvancedTextLayerItem: {
  alloc(): MSAdvancedTextLayerItemUninitialized;
  class(): MSAdvancedTextLayerItem;
  itemForSection(section: MSBaseInspectorSection): MSAdvancedTextLayerItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

