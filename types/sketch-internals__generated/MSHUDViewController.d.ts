interface MSHUDViewControllerUninitialized<InitializedType = MSHUDViewController> extends NSViewControllerUninitialized<MSHUDViewController> {}
interface MSHUDViewController extends NSViewController {
}
declare const MSHUDViewController: {
  alloc(): MSHUDViewControllerUninitialized;
  class(): MSHUDViewController;
}

