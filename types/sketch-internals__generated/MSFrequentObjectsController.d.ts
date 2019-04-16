interface MSFrequentObjectsControllerUninitialized<InitializedType = MSFrequentObjectsController> extends NSObjectUninitialized<MSFrequentObjectsController> {}
interface MSFrequentObjectsController extends NSObject {
  showMenuAtLocation_inView(location: NSPoint, view: NSView): void;

  frequentObjects(): NSArray<any>;
  setFrequentObjects(frequentObjects: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSFrequentObjectsController: {
  alloc(): MSFrequentObjectsControllerUninitialized;
  class(): MSFrequentObjectsController;  menuItemAttributedTitleForTitle_description(title: NSString | string, description: NSString | string): NSAttributedString;

}

