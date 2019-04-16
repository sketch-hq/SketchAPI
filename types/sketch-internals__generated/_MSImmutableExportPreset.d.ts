interface _MSImmutableExportPresetUninitialized<InitializedType = _MSImmutableExportPreset> extends MSImmutableModelObjectUninitialized<_MSImmutableExportPreset> {}
interface _MSImmutableExportPreset extends MSImmutableModelObject {

  name(): NSString;
  shouldApplyAutomatically(): boolean;
  exportFormats(): NSArray<any>;
}
declare const _MSImmutableExportPreset: {
  alloc(): _MSImmutableExportPresetUninitialized;
  class(): _MSImmutableExportPreset;
}

