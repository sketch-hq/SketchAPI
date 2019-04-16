interface MSWelcomeProgressViewUninitialized<InitializedType = MSWelcomeProgressView> extends NSViewUninitialized<MSWelcomeProgressView> {}

interface MSWelcomeProgressView extends NSView {

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  collectionItem(): MSCloudShareCollectionItem;
  setCollectionItem(collectionItem: MSCloudShareCollectionItem): void;
}

declare const MSWelcomeProgressView: {
  alloc(): MSWelcomeProgressViewUninitialized;
  class(): MSWelcomeProgressView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

