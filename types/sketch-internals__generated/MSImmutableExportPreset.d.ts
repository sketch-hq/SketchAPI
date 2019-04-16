interface MSImmutableExportPresetUninitialized<InitializedType = MSImmutableExportPreset> extends _MSImmutableExportPresetUninitialized<MSImmutableExportPreset> {}
interface MSImmutableExportPreset extends _MSImmutableExportPreset {
}
declare const MSImmutableExportPreset: {
  alloc(): MSImmutableExportPresetUninitialized;
  class(): MSImmutableExportPreset;
}

