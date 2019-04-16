interface MSCloudRoundedViewUninitialized<InitializedType = MSCloudRoundedView> extends NSViewUninitialized<MSCloudRoundedView> {}
interface MSCloudRoundedView extends NSView {
}
declare const MSCloudRoundedView: {
  alloc(): MSCloudRoundedViewUninitialized;
  class(): MSCloudRoundedView;
}

