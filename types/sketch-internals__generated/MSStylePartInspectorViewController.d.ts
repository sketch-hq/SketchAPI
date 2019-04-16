interface MSStylePartInspectorViewControllerUninitialized<InitializedType = MSStylePartInspectorViewController> extends NSViewControllerUninitialized<MSStylePartInspectorViewController> {}
interface MSStylePartInspectorViewController extends NSViewController, IMSInspectorSection, INSWindowDelegate {
  prepareForReuse(): void;
  hasEnabledStyle(): boolean;
  didGetAddedToInspector(): void;
  prepare(): void;
  supportedActionsForLayers(layers: NSArray<any> | any[]): MSMultipleStylePartInspectorAction;
  closePopoverImmediately(immediately: boolean): void;
  updateDisplayedValues(): void;

  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
  arrayController(): NSArrayController;
  setArrayController(arrayController: NSArrayController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  layers(): NSArray<any>;
}
declare const MSStylePartInspectorViewController: {
  alloc(): MSStylePartInspectorViewControllerUninitialized;
  class(): MSStylePartInspectorViewController;  stylePartViewController(): any;

}

