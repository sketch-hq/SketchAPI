interface MSToolbarPopoverContentViewControllerUninitialized<InitializedType = MSToolbarPopoverContentViewController> extends NSViewControllerUninitialized<MSToolbarPopoverContentViewController> {
  initWithAction(action: MSPopoverAction): InitializedType;
}
interface MSToolbarPopoverContentViewController extends NSViewController {
  makeButtonWithTitle_action(title: NSString | string, selector: string): NSButton;
  makeActionButtonWithTitle_action(title: NSString | string, selector: string): NSButton;
  makePopupButtonWithTitle_action(title: NSString | string, selector: string): NSPopUpButton;
  newLabel(): NSTextField;
  animateFrameWithCompletionHandler(handler: Block): void;

  action(): MSPopoverAction;
  edgeInsets(): NSEdgeInsets;
  stackView(): NSStackView;
  imageView(): NSImageView;
  titleLabel(): NSTextField;
  descriptionLabel(): NSTextField;
  actionView(): NSView;
  footerLabel(): NSTextField;
}
declare const MSToolbarPopoverContentViewController: {
  alloc(): MSToolbarPopoverContentViewControllerUninitialized;
  class(): MSToolbarPopoverContentViewController;
}

