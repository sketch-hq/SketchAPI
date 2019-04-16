interface MSColorInspectorImageDataControllerUninitialized<InitializedType = MSColorInspectorImageDataController> extends NSObjectUninitialized<MSColorInspectorImageDataController> {}
interface MSColorInspectorImageDataController extends NSObject {
  dataSupplierSelected(sender: any): IBAction;
  showMenuAtLocation_inView(location: NSPoint, view: NSView): void;

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSColorInspectorImageDataController: {
  alloc(): MSColorInspectorImageDataControllerUninitialized;
  class(): MSColorInspectorImageDataController;
}

