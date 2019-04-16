interface NSViewControllerUninitialized<InitializedType = NSViewController> extends NSResponderUninitialized<NSViewController> {
  initWithNibName_bundle(nibNameOrNil: NSNibName | null, nibBundleOrNil: NSBundle | null): InitializedType;
}
interface NSViewController extends NSResponder, INSEditor, INSSeguePerforming, INSUserInterfaceItemIdentification {
  loadView(): void;
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: any | null, didCommitSelector: string | null, contextInfo: void | null): void;
  commitEditing(): boolean;
  discardEditing(): void;
  viewDidLoad(): void;
  viewWillAppear(): void;
  viewDidAppear(): void;
  viewWillDisappear(): void;
  viewDidDisappear(): void;
  updateViewConstraints(): void;
  viewWillLayout(): void;
  viewDidLayout(): void;
  presentViewController_animator(viewController: NSViewController, animator: any): void;
  dismissViewController(viewController: NSViewController): void;
  dismissController(sender: any | null): IBAction;
  presentViewControllerAsSheet(viewController: NSViewController): void;
  presentViewControllerAsModalWindow(viewController: NSViewController): void;
  presentViewController_asPopoverRelativeToRect_ofView_preferredEdge_behavior(viewController: NSViewController, positioningRect: NSRect, positioningView: NSView, preferredEdge: NSRectEdge, behavior: NSPopoverBehavior): void;
  transitionFromViewController_toViewController_options_completionHandler(fromViewController: NSViewController, toViewController: NSViewController, options: NSViewControllerTransitionOptions, completion: Block): void;
  addChildViewController(childViewController: NSViewController): void;
  removeFromParentViewController(): void;
  insertChildViewController_atIndex(childViewController: NSViewController, index: NSInteger): void;
  removeChildViewControllerAtIndex(index: NSInteger): void;
  preferredContentSizeDidChangeForViewController(viewController: NSViewController): void;
  viewWillTransitionToSize(newSize: NSSize): void;
  presentViewController_asBCPopoverRelativeToView_preferredEdge_screenEdgeBehaviour(viewController: NSViewController, positioningView: NSView, preferredEdge: NSRectEdge, behaviour: BCPopoverScreenEdgeBehaviour): BCPopover;
  targetViewControllerForAction_sender(action: string, sender: any | null): NSViewController;
  ensureLoaded(): void;
  addChildViewController_fittingIntoView(childController: NSViewController, containerView: NSView): void;
  inspectorController(): MSInspectorController;
  reloadInspectorStack(sender: any): IBAction;

  nibName(): NSNibName;
  nibBundle(): NSBundle;
  representedObject(): any;
  setRepresentedObject(representedObject: any): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  view(): NSView;
  setView(view: NSView): void;
  viewLoaded(): boolean;
  preferredContentSize(): NSSize;
  setPreferredContentSize(preferredContentSize: NSSize): void;
  presentedViewControllers(): NSArray<any>;
  presentingViewController(): NSViewController;
  parentViewController(): NSViewController;
  childViewControllers(): NSArray<any>;
  setChildViewControllers(childViewControllers: NSArray<any> | any[]): void;
  storyboard(): NSStoryboard;
  extensionContext(): NSExtensionContext;
  sourceItemView(): NSView;
  setSourceItemView(sourceItemView: NSView): void;
  preferredScreenOrigin(): NSPoint;
  setPreferredScreenOrigin(preferredScreenOrigin: NSPoint): void;
  preferredMinimumSize(): NSSize;
  preferredMaximumSize(): NSSize;
  rootViewController(): NSViewController;
}
declare const NSViewController: {
  alloc(): NSViewControllerUninitialized;
  class(): NSViewController;
}

