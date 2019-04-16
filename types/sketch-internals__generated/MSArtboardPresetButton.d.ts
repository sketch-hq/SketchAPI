interface MSArtboardPresetButtonUninitialized<InitializedType = MSArtboardPresetButton> extends MSInspectorButtonUninitialized<MSArtboardPresetButton> {}
interface MSArtboardPresetButton extends MSInspectorButton {

  secondaryTitle(): NSString;
  setSecondaryTitle(secondaryTitle: NSString | string): void;
}
declare const MSArtboardPresetButton: {
  alloc(): MSArtboardPresetButtonUninitialized;
  class(): MSArtboardPresetButton;
}

