interface MSMainSplitViewControllerUninitialized<InitializedType = MSMainSplitViewController> extends NSObjectUninitialized<MSMainSplitViewController> {}
interface MSMainSplitViewController extends NSObject, INSSplitViewDelegate {
  didEnterVersionBrowser(): void;
  didExitVersionBrowser(): void;

  splitView(): NSSplitView;
  setSplitView(splitView: NSSplitView): void;
  window(): NSWindow;
  setWindow(window: NSWindow): void;
}
declare const MSMainSplitViewController: {
  alloc(): MSMainSplitViewControllerUninitialized;
  class(): MSMainSplitViewController;
}

