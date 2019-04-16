interface MSImmutableExportFormatUninitialized<InitializedType = MSImmutableExportFormat> extends _MSImmutableExportFormatUninitialized<MSImmutableExportFormat> {}

interface MSImmutableExportFormat extends _MSImmutableExportFormat {
  exportScaleInRect(rect: NSRect): CGFloat;
  isVectorExport(): boolean;
}

declare const MSImmutableExportFormat: {
  alloc(): MSImmutableExportFormatUninitialized;
  class(): MSImmutableExportFormat;
  defaultNameForScale(scale: CGFloat): NSString;
}

