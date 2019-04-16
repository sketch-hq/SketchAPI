interface MSHeaderInspectorItemUninitialized<InitializedType = MSHeaderInspectorItem> extends MSInspectorItemUninitialized<MSHeaderInspectorItem> {}

interface MSHeaderInspectorItem extends MSInspectorItem {
  setButtonTarget_action_image_alternate(target: any, action: string, image: NSImage, alternateImage: NSImage): void;
  setLabelLeadingMargin(margin: NSUInteger): void;

  labelText(): NSString;
  setLabelText(labelText: NSString | string): void;
  buttonToolTip(): NSString;
  setButtonToolTip(buttonToolTip: NSString | string): void;
  buttonState(): NSControlStateValue;
  setButtonState(buttonState: NSControlStateValue): void;
  buttonDisabled(): boolean;
  setButtonDisabled(buttonDisabled: boolean): void;
  wantsSeparator(): boolean;
  setWantsSeparator(wantsSeparator: boolean): void;
  wantsSeparatorInset(): boolean;
  setWantsSeparatorInset(wantsSeparatorInset: boolean): void;
  accessoryViews(): NSArray<any>;
  setAccessoryViews(accessoryViews: NSArray<any> | any[]): void;
  titleView(): NSView;
  setTitleView(titleView: NSView): void;
}

declare const MSHeaderInspectorItem: {
  alloc(): MSHeaderInspectorItemUninitialized;
  class(): MSHeaderInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSHeaderInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

