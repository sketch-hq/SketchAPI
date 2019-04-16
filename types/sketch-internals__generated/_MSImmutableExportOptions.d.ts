interface _MSImmutableExportOptionsUninitialized<InitializedType = _MSImmutableExportOptions> extends MSImmutableModelObjectUninitialized<_MSImmutableExportOptions> {}
interface _MSImmutableExportOptions extends MSImmutableModelObject {

  includedLayerIds(): NSArray<any>;
  layerOptions(): MSExportLayerOptions;
  shouldTrim(): boolean;
  exportFormats(): NSArray<any>;
}
declare const _MSImmutableExportOptions: {
  alloc(): _MSImmutableExportOptionsUninitialized;
  class(): _MSImmutableExportOptions;
}

