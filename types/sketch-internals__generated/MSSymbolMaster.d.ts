interface MSSymbolMasterUninitialized<InitializedType = MSSymbolMaster> extends _MSSymbolMasterUninitialized<MSSymbolMaster> {}

interface MSSymbolMaster extends _MSSymbolMaster, IBCSortable {
  applyOverrides_scale_rect_inDocument(overrideValues: NSArray<any> | any[], scale: CGFloat, rect: NSRect, doc: MSImmutableDocumentData): void;
  newSymbolInstance(): MSSymbolInstance;
  copyWithIDMapping(idMap: NSMutableDictionary<any, any> | {[key: string]: any}): MSSymbolMaster;
  canInsertInstanceIntoGroupWithoutInfiniteRecursion(group: MSLayerGroup): boolean;
  setOverridePoint_editable(overridePoint: MSOverridePoint, editable: boolean): void;
  syncOverrideProperties(): void;
  hasInstances(): boolean;
  ensureSymbolIDUniqueInDocument(doc: MSDocumentData): boolean;
  detachAllInstances(): void;
  removeFromParentAndDetachAllInstances(): void;
  isSafeToDelete(): boolean;
  ancestorIDsForLayerNamed(layerName: NSString | string): NSArray<any>;
  invalidateModifiedSymbolCache(): void;
  updateOverridePropertiesWithObjectIDMap(idMap: NSDictionary<any, any> | {[key: string]: any}): void;
  updateOverridesWithObjectIDMap(idMap: NSDictionary<any, any> | {[key: string]: any}): void;

  availableOverrides(): NSArray<any>;
  changeIdentifier(): NSInteger;
  setChangeIdentifier(changeIdentifier: NSInteger): void;
  isDirty(): boolean;
  setIsDirty(isDirty: boolean): void;
  allInstances(): NSArray<any>;
  allInfluencedInstances(): NSArray<any>;
  nestedSymbols(): NSSet<any>;
  overrideProperies(): NSDictionary<any, any>;
  name(): NSString;
}

declare const MSSymbolMaster: {
  alloc(): MSSymbolMasterUninitialized;
  class(): MSSymbolMaster;
  convertArtboardToSymbol(artboard: MSArtboardGroup): MSSymbolMaster;
  convertSymbolToArtboard(symbol: MSSymbolMaster): MSArtboardGroup;
}

