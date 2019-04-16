interface MSImmutableExportOptionsUninitialized<InitializedType = MSImmutableExportOptions> extends _MSImmutableExportOptionsUninitialized<MSImmutableExportOptions> {}

interface MSImmutableExportOptions extends _MSImmutableExportOptions {
  firstFormat(): NSString;
}

declare const MSImmutableExportOptions: {
  alloc(): MSImmutableExportOptionsUninitialized;
  class(): MSImmutableExportOptions;
}

