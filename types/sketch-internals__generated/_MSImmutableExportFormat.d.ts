interface _MSImmutableExportFormatUninitialized<InitializedType = _MSImmutableExportFormat> extends MSImmutableModelObjectUninitialized<_MSImmutableExportFormat> {}

interface _MSImmutableExportFormat extends MSImmutableModelObject {

  absoluteSize(): CGFloat;
  fileFormat(): NSString;
  name(): NSString;
  namingScheme(): MSExportFormatNamingScheme;
  scale(): CGFloat;
  visibleScaleType(): MSUserVisibleScaleType;
}

declare const _MSImmutableExportFormat: {
  alloc(): _MSImmutableExportFormatUninitialized;
  class(): _MSImmutableExportFormat;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

