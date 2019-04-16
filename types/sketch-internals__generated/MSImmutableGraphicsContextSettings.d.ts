interface MSImmutableGraphicsContextSettingsUninitialized<InitializedType = MSImmutableGraphicsContextSettings> extends _MSImmutableGraphicsContextSettingsUninitialized<MSImmutableGraphicsContextSettings> {}
interface MSImmutableGraphicsContextSettings extends _MSImmutableGraphicsContextSettings {
  shouldChangeGraphicsContext(): boolean;
  CGBlendMode(): CGBlendMode;
}
declare const MSImmutableGraphicsContextSettings: {
  alloc(): MSImmutableGraphicsContextSettingsUninitialized;
  class(): MSImmutableGraphicsContextSettings;
}

