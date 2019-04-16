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
  class(): MSAvailableOverride;
  availableOverrideWithOverridePoint_master_overrideValue_otherOverrides_overrideProperties_inParent_document(overridePoint: MSOverridePoint, master: MSImmutableSymbolMaster, overrideValue: MSOverrideValue | null, otherOverrides: NSDictionary<any, any> | {[key: string]: any}, overrideProperties: NSDictionary<any, any> | {[key: string]: any}, parent: MSAvailableOverride | null, document: MSImmutableDocumentData): MSAvailableOverride;
  enumerateOverrides_withBlock(overrides: NSArray<any> | any[], block: Block): void;
  flattenAvailableOverrides(overrides: NSArray<any> | any[]): NSArray<any>;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

