interface MSDocumentWindowContentViewUninitialized<InitializedType = MSDocumentWindowContentView> extends NSViewUninitialized<MSDocumentWindowContentView> {}

interface MSDocumentWindowContentView extends NSView {
}

declare const MSDocumentWindowContentView: {
  alloc(): MSDocumentWindowContentViewUninitialized;
  class(): MSDocumentWindowContentView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

