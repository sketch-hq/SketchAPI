interface MSImmutableStyleColorControlsUninitialized<InitializedType = MSImmutableStyleColorControls> extends _MSImmutableStyleColorControlsUninitialized<MSImmutableStyleColorControls> {}

interface MSImmutableStyleColorControls extends _MSImmutableStyleColorControls {
  renderBitmapEffects(image: CIImage): CIImage;
}

declare const MSImmutableStyleColorControls: {
  alloc(): MSImmutableStyleColorControlsUninitialized;
  class(): MSImmutableStyleColorControls;
}

