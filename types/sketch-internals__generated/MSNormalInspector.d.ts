interface MSNormalInspectorUninitialized<InitializedType = MSNormalInspector> extends NSViewControllerUninitialized<MSNormalInspector> {}

interface MSNormalInspector extends NSViewController, IMSStylePartInspectorDelegate, IMSInspectorChildController {
  selectionDidChangeTo(newLayers: NSArray<any> | any[]): void;
  adjustInspectorToColorPopover_sender(popover: BCPopover, sender: any): void;
  closeAnyColorPopover(): void;
  colorMagnifierAction(sender: any): IBAction;
  changeTextLayerFont(sender: any): IBAction;
  layerPositionPossiblyChanged(): void;
  showFillOptionsAction(sender: any): IBAction;
  showBorderOptionsAction(sender: any): IBAction;
  openPopoverForStylePart_atIndex_preferringNative(stylePart: MSStylePartType, index: NSUInteger, prefersNative: boolean): void;
  reloadSharedObjectsSection(): void;
  beginRenameSharedObject_completionBlock(sharedObject: MSSharedObject, block: MSRenameSharedObjectBlock): void;
  prepareForDisplay(): void;
  selectionDidChangeTo(layers: NSArray<any> | any[]): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  layerPositionPossiblyChanged(): void;

  stackView(): MSInspectorStackView;
  setStackView(stackView: MSInspectorStackView): void;
  //   layers(): MSLayerArray;
  //   setLayers(layers: MSLayerArray): void;
  eventHandler(): MSEventHandler;
  setEventHandler(eventHandler: MSEventHandler): void;
  sharedStyleInspectorVisible(): boolean;
}

declare const MSNormalInspector: {
  alloc(): MSNormalInspectorUninitialized;
  class(): MSNormalInspector;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

