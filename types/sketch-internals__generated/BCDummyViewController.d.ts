interface BCDummyViewControllerUninitialized<InitializedType = BCDummyViewController> extends NSViewControllerUninitialized<BCDummyViewController> {}
interface BCDummyViewController extends NSViewController {
}
declare const BCDummyViewController: {
  alloc(): BCDummyViewControllerUninitialized;
  class(): BCDummyViewController;
}

