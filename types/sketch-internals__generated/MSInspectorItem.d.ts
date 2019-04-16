interface MSInspectorItemUninitialized<InitializedType = MSInspectorItem> extends NSViewControllerUninitialized<MSInspectorItem> {}

interface MSInspectorItem extends NSViewController {
  manageTextField_adaptor_identifier_inlineToolTip_touchBarItems(textField: MSInlineUpDownTextField, adaptor: MSMathInspectorValueAdaptor, identifier: NSUserInterfaceItemIdentifier, toolTip: NSString | string, touchBarItems: NSArray<any> | any[] | null): void;
  manageTextField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(textField: MSInlineUpDownTextField, adaptor: MSMathInspectorValueAdaptor, identifier: NSUserInterfaceItemIdentifier, toolTip: NSString | string, touchBarItems: NSArray<any> | any[] | null, bindingOptions: NSDictionary<any, any> | {[key: string]: any} | null): void;
  selectionDidChangeTo(layers: MSLayerArray): void;
  updateDisplayedValues(): void;
  sectionWithIdentifierWillCollapse(identifier: NSString | string): void;
  cacheUserInterfaceElement_withKey(element: any | null, cacheKey: any | null): void;
  cachedUserInterfaceElementForKey(cacheKey: any | null): any;

  layers(): MSLayerArray;
  layersController(): NSArrayController;
  setLayersController(layersController: NSArrayController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  document(): MSDocument;
}

declare const MSInspectorItem: {
  alloc(): MSInspectorItemUninitialized;
  class(): MSInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

