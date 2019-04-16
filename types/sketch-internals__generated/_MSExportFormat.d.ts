interface _MSExportFormatUninitialized<InitializedType = _MSExportFormat> extends MSModelObjectUninitialized<_MSExportFormat> {}
interface _MSExportFormat extends MSModelObject {

  absoluteSize(): CGFloat;
  setAbsoluteSize(absoluteSize: CGFloat): void;
  fileFormat(): NSString;
  setFileFormat(fileFormat: NSString | string): void;
  name(): NSString;
  setName(name: NSString | string): void;
  namingScheme(): MSExportFormatNamingScheme;
  setNamingScheme(namingScheme: MSExportFormatNamingScheme): void;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  visibleScaleType(): MSUserVisibleScaleType;
  setVisibleScaleType(visibleScaleType: MSUserVisibleScaleType): void;
}
declare const _MSExportFormat: {
  alloc(): _MSExportFormatUninitialized;
  class(): _MSExportFormat;
}

