interface MSCloudViewControllerUninitialized<InitializedType = MSCloudViewController> extends NSViewControllerUninitialized<MSCloudViewController> {
  initWithAction(action: MSCloudAction): InitializedType;
}
interface MSCloudViewController extends NSViewController {
  setContentViewController_animated(contentViewController: MSCloudBaseViewController, animated: boolean): void;
  resetContentViewController(sender: any): IBAction;
  updateFrame(): void;

  action(): MSCloudAction;
  contentViewController(): MSCloudBaseViewController;
  setContentViewController(contentViewController: MSCloudBaseViewController): void;
}
declare const MSCloudViewController: {
  alloc(): MSCloudViewControllerUninitialized;
  class(): MSCloudViewController;
}

