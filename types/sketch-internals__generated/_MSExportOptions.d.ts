interface _MSExportOptionsUninitialized<InitializedType = _MSExportOptions> extends MSModelObjectUninitialized<_MSExportOptions> {}

interface _MSExportOptions extends MSModelObject {
  addExportFormat(value: MSExportFormat): void;
  addExportFormats(exportFormats: NSArray<any> | any[]): void;
  insertExportFormat_atIndex(value: MSExportFormat, index: NSUInteger): void;
  insertExportFormat_beforeExportFormat(value: MSExportFormat, after: MSExportFormat | null): void;
  insertExportFormats_beforeExportFormat(values: NSArray<any> | any[], before: MSExportFormat | null): void;
  insertExportFormat_afterExportFormat(value: MSExportFormat, after: MSExportFormat | null): void;
  insertExportFormats_afterExportFormat(values: NSArray<any> | any[], after: MSExportFormat | null): void;
  removeExportFormat(value: MSExportFormat): void;
  removeExportFormatAtIndex(index: NSUInteger): void;
  removeExportFormatsAtIndexes(indexes: NSIndexSet): void;
  removeAllExportFormats(): void;
  moveExportFormatIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  includedLayerIds(): NSArray<any>;
  setIncludedLayerIds(includedLayerIds: NSArray<any> | any[]): void;
  layerOptions(): MSExportLayerOptions;
  setLayerOptions(layerOptions: MSExportLayerOptions): void;
  shouldTrim(): boolean;
  setShouldTrim(shouldTrim: boolean): void;
  exportFormats(): NSArray<any>;
  setExportFormats(exportFormats: NSArray<any> | any[]): void;
}

declare const _MSExportOptions: {
  alloc(): _MSExportOptionsUninitialized;
  class(): _MSExportOptions;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

