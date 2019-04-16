interface MSColorInspectorUninitialized<InitializedType = MSColorInspector> extends NSViewControllerUninitialized<MSColorInspector> {}
interface MSColorInspector extends NSViewController {
  validateEnableButtons(): void;
  stack(): void;
  setColor(color: MSColor): void;
  setColorWithoutNotifying(color: MSColor): void;
  refreshAction(sender: any): IBAction;
  colorMagnifierAction(sender: any): IBAction;
  setInitialColor(color: MSColor): void;
  setMaximumAvailableHeight(maxHeight: NSInteger): void;
  reflectEffectiveStyleParts(): void;
  revertToDefaultFirstResponder(): void;

  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  colorModePickerController(): MSColorModePickerController;
}
declare const MSColorInspector: {
  alloc(): MSColorInspectorUninitialized;
  class(): MSColorInspector;  presentColorInspectorPopoverForViewController_document_globalAssets_relativeToView_setupHandler(viewController: NSViewController, document: MSDocument, globalAssets: MSPersistentAssetCollection, positioningView: NSView, setupHandler: MSColorInspectorSetupBlock): BCPopover;
  presentColorInspectorPopoverWithDelegate_document_globalAssets_relativeToView_setupHandler(delegate: any, document: MSDocument, globalAssets: MSPersistentAssetCollection, positioningView: NSView, setupHandler: MSColorInspectorSetupBlock): BCPopover;

}

