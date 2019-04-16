interface MSArtboardPresetsRowViewUninitialized<InitializedType = MSArtboardPresetsRowView> extends NSTableRowViewUninitialized<MSArtboardPresetsRowView> {}

interface MSArtboardPresetsRowView extends NSTableRowView {
}

declare const MSArtboardPresetsRowView: {
  alloc(): MSArtboardPresetsRowViewUninitialized;
  class(): MSArtboardPresetsRowView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

