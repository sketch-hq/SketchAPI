interface MSImmutableSymbolInstanceUninitialized<InitializedType = MSImmutableSymbolInstance> extends _MSImmutableSymbolInstanceUninitialized<MSImmutableSymbolInstance> {
  initWithGroupForMigration(group: MSImmutableLayerGroup): InitializedType;
}

interface MSImmutableSymbolInstance extends _MSImmutableSymbolInstance {
  isScaled(): boolean;
  availableOverridesWithDocument(document: MSImmutableDocumentData): NSArray<any>;
  availableOverrideValuesWithDocument(document: MSImmutableDocumentData): NSArray<any>;
  prepareModifiedMasterInDocument(document: MSImmutableDocumentData): MSImmutableSymbolMaster;
  modifiedMasterInDocument(document: MSImmutableDocumentData): MSImmutableSymbolMaster;
  detachedLayerGroupRecursively_withDocument_visitedSymbols(detachRecursively: boolean, document: MSImmutableDocumentData, visitedSymbols: NSSet<any> | null): MSImmutableLayerGroup;
  updateOverridesWithObjectIDMapping_afterChangingSymbolMasterWithID(objectIDMapping: NSDictionary<any, any> | {[key: string]: any}, symbolID: NSString | string): void;
  overridesWithGridIndexRemoved(overrides: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  detachedMasterInDocument_withCache(document: MSImmutableDocumentData, cache: BCCache | null): MSImmutableLayerGroup;
  overridePointsInDocument(document: MSImmutableDocumentData): NSArray<any>;
  calculateAvailableOverridesWithDocument(document: MSImmutableDocumentData): NSArray<any>;
  overrideMatchingPoint_inDocument(point: MSOverridePoint, document: MSImmutableDocumentData): MSAvailableOverride;
  cachedModifiedSymbolForMaster_inContext(originalSymbol: MSImmutableSymbolMaster, context: MSRenderingContext): MSImmutableSymbolMaster;

  overrides(): NSDictionary<any, any>;
}

declare const MSImmutableSymbolInstance: {
  alloc(): MSImmutableSymbolInstanceUninitialized;
  class(): MSImmutableSymbolInstance;
}

