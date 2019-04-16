interface MSImageViewUninitialized<InitializedType = MSImageView> extends NSImageViewUninitialized<MSImageView> {}
interface MSImageView extends NSImageView {
}
declare const MSImageView: {
  alloc(): MSImageViewUninitialized;
  class(): MSImageView;
}

