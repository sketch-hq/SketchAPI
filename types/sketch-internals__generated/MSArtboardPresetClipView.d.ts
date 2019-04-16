interface MSArtboardPresetClipViewUninitialized<InitializedType = MSArtboardPresetClipView> extends NSClipViewUninitialized<MSArtboardPresetClipView> {}

interface MSArtboardPresetClipView extends NSClipView {
}

declare const MSArtboardPresetClipView: {
  alloc(): MSArtboardPresetClipViewUninitialized;
  class(): MSArtboardPresetClipView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

