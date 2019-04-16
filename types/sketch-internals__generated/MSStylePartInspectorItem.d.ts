interface MSStylePartInspectorItemUninitialized<InitializedType = MSStylePartInspectorItem> extends NSViewControllerUninitialized<MSStylePartInspectorItem> {}
interface MSStylePartInspectorItem extends NSViewController {
  updateDisplayedValues(): void;

  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
  layers(): NSArray<any>;
  stylesController(): NSArrayController;
  setStylesController(stylesController: NSArrayController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSStylePartInspectorItem: {
  alloc(): MSStylePartInspectorItemUninitialized;
  class(): MSStylePartInspectorItem;
}

