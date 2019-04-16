interface CHViewControllerUninitialized<InitializedType = CHViewController> extends NSViewControllerUninitialized<CHViewController> {}
interface CHViewController extends NSViewController {
}
declare const CHViewController: {
  alloc(): CHViewControllerUninitialized;
  class(): CHViewController;
}

