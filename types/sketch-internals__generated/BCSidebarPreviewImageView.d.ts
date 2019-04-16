interface BCSidebarPreviewImageViewUninitialized<InitializedType = BCSidebarPreviewImageView> extends NSViewUninitialized<BCSidebarPreviewImageView> {}

interface BCSidebarPreviewImageView extends NSView {

  image(): NSImage;
  setImage(image: NSImage): void;
}

declare const BCSidebarPreviewImageView: {
  alloc(): BCSidebarPreviewImageViewUninitialized;
  class(): BCSidebarPreviewImageView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

