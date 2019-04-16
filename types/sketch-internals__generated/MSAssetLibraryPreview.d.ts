interface MSAssetLibraryPreviewUninitialized<InitializedType = MSAssetLibraryPreview> extends NSViewUninitialized<MSAssetLibraryPreview> {}

interface MSAssetLibraryPreview extends NSView {

  libraryPreview(): NSImage;
  setLibraryPreview(libraryPreview: NSImage): void;
  preview(): NSImage;
  setPreview(preview: NSImage): void;
}

declare const MSAssetLibraryPreview: {
  alloc(): MSAssetLibraryPreviewUninitialized;
  class(): MSAssetLibraryPreview;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

