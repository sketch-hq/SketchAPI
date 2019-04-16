interface MSCloudBaseViewControllerUninitialized<InitializedType = MSCloudBaseViewController> extends MSToolbarPopoverContentViewControllerUninitialized<MSCloudBaseViewController> {}

interface MSCloudBaseViewController extends MSToolbarPopoverContentViewController {
  cloudBaseViewControllerDidAppear(): void;

  cloudAction(): MSCloudAction;
  cloudViewController(): MSCloudViewController;
}

declare const MSCloudBaseViewController: {
  alloc(): MSCloudBaseViewControllerUninitialized;
  class(): MSCloudBaseViewController;
}

