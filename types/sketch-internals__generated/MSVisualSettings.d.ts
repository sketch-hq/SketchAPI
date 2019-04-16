interface MSVisualSettingsUninitialized<InitializedType = MSVisualSettings> extends NSObjectUninitialized<MSVisualSettings> {}
interface MSVisualSettings extends NSObject {
  updateSettings(): boolean;
}
declare const MSVisualSettings: {
  alloc(): MSVisualSettingsUninitialized;
  class(): MSVisualSettings;  overlayColorSettingsFromTheme(): MSOverlayColorSettings;

}

