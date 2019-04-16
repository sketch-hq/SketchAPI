interface MSTiledImageViewUninitialized<InitializedType = MSTiledImageView> extends NSViewUninitialized<MSTiledImageView> {}

interface MSTiledImageView extends NSView {

  image(): NSImage;
  setImage(image: NSImage): void;
}

declare const MSTiledImageView: {
  alloc(): MSTiledImageViewUninitialized;
  class(): MSTiledImageView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

