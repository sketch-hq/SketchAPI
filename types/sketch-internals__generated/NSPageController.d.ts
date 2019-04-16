interface NSPageControllerUninitialized<InitializedType = NSPageController> extends NSViewControllerUninitialized<NSPageController> {}

interface NSPageController extends NSViewController, INSAnimatablePropertyContainer, INSCoding {
  navigateForwardToObject(object: any): void;
  completeTransition(): void;
  navigateBack(sender: any | null): IBAction;
  navigateForward(sender: any | null): IBAction;
  takeSelectedIndexFrom(sender: any | null): IBAction;
  animator(): NSPageController;
  animationForKey(key: NSAnimatablePropertyKey): any;
  encodeWithCoder(aCoder: NSCoder): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  selectedViewController(): NSViewController;
  transitionStyle(): NSPageControllerTransitionStyle;
  setTransitionStyle(transitionStyle: NSPageControllerTransitionStyle): void;
  arrangedObjects(): NSArray<any>;
  setArrangedObjects(arrangedObjects: NSArray<any> | any[]): void;
  selectedIndex(): NSInteger;
  setSelectedIndex(selectedIndex: NSInteger): void;
  animations(): NSDictionary<any, any>;
  setAnimations(animations: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const NSPageController: {
  alloc(): NSPageControllerUninitialized;
  class(): NSPageController;
  defaultAnimationForKey(key: NSAnimatablePropertyKey): any;
}

