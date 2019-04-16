interface MSTiledImageViewUninitialized<InitializedType = MSTiledImageView> extends NSViewUninitialized<MSTiledImageView> {}
interface MSTiledImageView extends NSView {

  image(): NSImage;
  setImage(image: NSImage): void;
}
declare const MSTiledImageView: {
  alloc(): MSTiledImageViewUninitialized;
  class(): MSTiledImageView;
}

