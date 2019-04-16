interface NSPageControllerUninitialized<InitializedType = NSPageController> extends NSViewControllerUninitialized<NSPageController> {}
interface NSPageController extends NSViewController, INSAnimatablePropertyContainer, INSCoding {
  navigateForwardToObject(object: any): void;
  completeTransition(): void;
  navigateBack(sender: any | null): IBAction;
  navigateForward(sender: any | null): IBAction;
  takeSelectedIndexFrom(sender: any | null): IBAction;

  delegate(): any;
  setDelegate(delegate: any): void;
  selectedViewController(): NSViewController;
  transitionStyle(): NSPageControllerTransitionStyle;
  setTransitionStyle(transitionStyle: NSPageControllerTransitionStyle): void;
  arrangedObjects(): NSArray<any>;
  setArrangedObjects(arrangedObjects: NSArray<any> | any[]): void;
  selectedIndex(): NSInteger;
  setSelectedIndex(selectedIndex: NSInteger): void;
}
declare const NSPageController: {
  alloc(): NSPageControllerUninitialized;
  class(): NSPageController;
}

