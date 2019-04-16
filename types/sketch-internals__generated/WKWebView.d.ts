interface WKWebViewUninitialized<InitializedType = WKWebView> extends NSViewUninitialized<WKWebView> {}
interface WKWebView extends NSView {
}
declare const WKWebView: {
  alloc(): WKWebViewUninitialized;
  class(): WKWebView;
}

