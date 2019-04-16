interface MSInspectorControllerUninitialized<InitializedType = MSInspectorController> extends NSViewControllerUninitialized<MSInspectorController> {}

interface MSInspectorController extends NSViewController, INSTouchBarDelegate {
  changeColor(sender: any): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  updateAfterDocumentModelReverted(): void;
  layerPositionPossiblyChanged(): void;
  currentHandlerChanged(): void;
  handlerManager(): MSEventHandlerManager;
  changeTextLayerFont(sender: any): IBAction;
  beginRenameSharedObject_completionBlock(sharedObject: MSSharedObject, block: MSRenameSharedObjectBlock): void;
  reloadSharedObjectsSection(): void;
  validateAlignmentButtons(): void;
  reload(): void;
  focusOnFirstTextField(): void;
  focusOnTextFieldWithIdentifier(identifier: NSUserInterfaceItemIdentifier): void;
  showFillOptionsAction(sender: any): IBAction;
  showBorderOptionsAction(sender: any): IBAction;
  openPopoverForStylePart_atIndex_preferringNative(stylePart: MSStylePartType, index: NSUInteger, prefersNative: boolean): void;
  adjustInspectorToColorPopover_sender(popover: BCPopover, sender: any): void;
  reloadTouchBars(): void;
  touchBar_makeItemForIdentifier(touchBar: NSTouchBar, identifier: NSTouchBarItemIdentifier): NSTouchBarItem;

  currentController(): NSViewController;
  setCurrentController(currentController: NSViewController): void;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  alignmentBarHidden(): boolean;
  setAlignmentBarHidden(alignmentBarHidden: boolean): void;
  sharedStyleInspectorVisible(): boolean;
}

declare const MSInspectorController: {
  alloc(): MSInspectorControllerUninitialized;
  class(): MSInspectorController;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

