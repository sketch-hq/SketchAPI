interface MSAvailableOverrideUninitialized<InitializedType = MSAvailableOverride> extends NSObjectUninitialized<MSAvailableOverride> {}
interface MSAvailableOverride extends NSObject {
  originalSharedStyle_libraryController(document: MSDocumentData, controller: MSAssetLibraryController): MSSharedStyleReference;
  symbolDefaultSharedStyle_libraryController(document: MSDocumentData, controller: MSAssetLibraryController): MSSharedStyleReference;
  importableDefaultSharedStyle_libraryController(document: MSDocumentData, controller: MSAssetLibraryController): MSSharedStyleReference;
  currentSharedStyle_libraryController(document: MSDocumentData, controller: MSAssetLibraryController): MSSharedStyleReference;

  dataType(): MSDataType;
  parent(): MSAvailableOverride;
  master(): MSImmutableSymbolMaster;
  affectedLayer(): MSImmutableLayer;
  overridePoint(): MSOverridePoint;
  children(): NSArray<any>;
  overrideValue(): any;
  currentValue(): any;
  defaultValue(): any;
  hasOverride(): boolean;
  defaultIsItselfAnOverride(): boolean;
  isEditable(): boolean;
  isVisible(): boolean;
}
declare const MSAvailableOverride: {
  alloc(): MSAvailableOverrideUninitialized;
  class(): MSAvailableOverride;  availableOverrideWithOverridePoint_master_overrideValue_otherOverrides_overrideProperties_inParent_document(overridePoint: MSOverridePoint, master: MSImmutableSymbolMaster, overrideValue: MSOverrideValue | null, otherOverrides: NSDictionary<any, any> | {[key: string]: any}, overrideProperties: NSDictionary<any, any> | {[key: string]: any}, parent: MSAvailableOverride | null, document: MSImmutableDocumentData): MSAvailableOverride;
  enumerateOverrides_withBlock(overrides: NSArray<any> | any[], block: Block): void;
  flattenAvailableOverrides(overrides: NSArray<any> | any[]): NSArray<any>;

}

