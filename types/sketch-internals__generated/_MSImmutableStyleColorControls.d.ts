interface _MSImmutableStyleColorControlsUninitialized<InitializedType = _MSImmutableStyleColorControls> extends MSImmutableStylePartUninitialized<_MSImmutableStyleColorControls> {}

interface _MSImmutableStyleColorControls extends MSImmutableStylePart {

  brightness(): CGFloat;
  contrast(): CGFloat;
  hue(): CGFloat;
  saturation(): CGFloat;
}

declare const _MSImmutableStyleColorControls: {
  alloc(): _MSImmutableStyleColorControlsUninitialized;
  class(): _MSImmutableStyleColorControls;
}

