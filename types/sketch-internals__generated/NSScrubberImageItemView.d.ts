interface NSScrubberImageItemViewUninitialized<InitializedType = NSScrubberImageItemView> extends NSScrubberItemViewUninitialized<NSScrubberImageItemView> {}
interface NSScrubberImageItemView extends NSScrubberItemView {

  imageView(): NSImageView;
  image(): NSImage;
  setImage(image: NSImage): void;
  imageAlignment(): NSImageAlignment;
  setImageAlignment(imageAlignment: NSImageAlignment): void;
}
declare const NSScrubberImageItemView: {
  alloc(): NSScrubberImageItemViewUninitialized;
  class(): NSScrubberImageItemView;
}

