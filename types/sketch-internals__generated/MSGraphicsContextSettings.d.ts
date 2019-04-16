interface MSGraphicsContextSettingsUninitialized<InitializedType = MSGraphicsContextSettings> extends _MSGraphicsContextSettingsUninitialized<MSGraphicsContextSettings> {}
interface MSGraphicsContextSettings extends _MSGraphicsContextSettings {
}
declare const MSGraphicsContextSettings: {
  alloc(): MSGraphicsContextSettingsUninitialized;
  class(): MSGraphicsContextSettings;
}

