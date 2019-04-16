interface MSNestedScrollViewUninitialized<InitializedType = MSNestedScrollView> extends NSScrollViewUninitialized<MSNestedScrollView> {}
interface MSNestedScrollView extends NSScrollView {
}
declare const MSNestedScrollView: {
  alloc(): MSNestedScrollViewUninitialized;
  class(): MSNestedScrollView;
}

