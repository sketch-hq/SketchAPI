interface MSStackViewScrollViewUninitialized<InitializedType = MSStackViewScrollView> extends NSScrollViewUninitialized<MSStackViewScrollView> {}
interface MSStackViewScrollView extends NSScrollView {

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSStackViewScrollView: {
  alloc(): MSStackViewScrollViewUninitialized;
  class(): MSStackViewScrollView;
}

