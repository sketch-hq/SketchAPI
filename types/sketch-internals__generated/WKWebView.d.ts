interface WKWebViewUninitialized<InitializedType = WKWebView> extends NSViewUninitialized<WKWebView> {}

interface WKWebView extends NSView {
}

declare const WKWebView: {
  alloc(): WKWebViewUninitialized;
  class(): WKWebView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

