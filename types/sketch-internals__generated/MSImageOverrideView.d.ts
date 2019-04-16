interface MSImageOverrideViewUninitialized<InitializedType = MSImageOverrideView> extends NSImageViewUninitialized<MSImageOverrideView> {}
interface MSImageOverrideView extends NSImageView {

  placeholderImage(): NSImage;
  setPlaceholderImage(placeholderImage: NSImage): void;
  displaysPlaceholder(): boolean;
}
declare const MSImageOverrideView: {
  alloc(): MSImageOverrideViewUninitialized;
  class(): MSImageOverrideView;
}

