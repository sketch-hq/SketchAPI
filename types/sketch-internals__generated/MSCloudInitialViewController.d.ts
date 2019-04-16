interface MSCloudInitialViewControllerUninitialized<InitializedType = MSCloudInitialViewController> extends MSCloudBaseViewControllerUninitialized<MSCloudInitialViewController> {}
interface MSCloudInitialViewController extends MSCloudBaseViewController {
}
declare const MSCloudInitialViewController: {
  alloc(): MSCloudInitialViewControllerUninitialized;
  class(): MSCloudInitialViewController;
}

