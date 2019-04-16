interface _MSExportPresetUninitialized<InitializedType = _MSExportPreset> extends MSModelObjectUninitialized<_MSExportPreset> {}

interface _MSExportPreset extends MSModelObject {
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

  name(): NSString;
  setName(name: NSString | string): void;
  shouldApplyAutomatically(): boolean;
  setShouldApplyAutomatically(shouldApplyAutomatically: boolean): void;
  exportFormats(): NSArray<any>;
  setExportFormats(exportFormats: NSArray<any> | any[]): void;
}

declare const _MSExportPreset: {
  alloc(): _MSExportPresetUninitialized;
  class(): _MSExportPreset;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

