interface MSScrollViewUninitialized<InitializedType = MSScrollView> extends NSScrollViewUninitialized<MSScrollView> {}
interface MSScrollView extends NSScrollView {

  allowsScrolling(): boolean;
  setAllowsScrolling(allowsScrolling: boolean): void;
}
declare const MSScrollView: {
  alloc(): MSScrollViewUninitialized;
  class(): MSScrollView;
}

