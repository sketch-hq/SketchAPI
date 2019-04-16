interface MSMirrorWebViewUninitialized<InitializedType = MSMirrorWebView> extends WKWebViewUninitialized<MSMirrorWebView> {}

interface MSMirrorWebView extends WKWebView {
}

declare const MSMirrorWebView: {
  alloc(): MSMirrorWebViewUninitialized;
  class(): MSMirrorWebView;
  developerToolsEnabled(): boolean;
}

