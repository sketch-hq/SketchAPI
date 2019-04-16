interface MSSymbolInstanceUninitialized<InitializedType = MSSymbolInstance> extends _MSSymbolInstanceUninitialized<MSSymbolInstance> {}

interface MSSymbolInstance extends _MSSymbolInstance {
  overrideMatchingPoint(point: MSOverridePoint): MSAvailableOverride;
  symbolMaster(): MSSymbolMaster;
  isInstanceForMaster(symbolMaster: MSSymbolMaster): boolean;
  changeInstanceToSymbol(symbol: MSSymbolMaster): void;
  numberOfVisibleCells(): NSUInteger;
  detachStylesAndReplaceWithGroupRecursively(detachRecursively: boolean): MSLayerGroup;
  detachByReplacingWithGroupRecursively_withDocument_visitedSymbols(detachRecursively: boolean, doc: MSImmutableDocumentData, visitedSymbols: NSSet<any> | null): MSLayerGroup;
  resizeInstanceToFitSymbol(symbol: MSSymbolMaster): void;
  resetSizeToMaster(): void;
  setValue_forOverridePoint(value: any | null, point: MSOverridePoint): void;
  updateOverridesWithObjectIDMap(idMap: NSDictionary<any, any> | {[key: string]: any}): void;
  invalidateIfAffectedBySymbolMastersIn(modifiedSymbols: NSSet<any>): boolean;
  removeShareableObjectsFromOverrides(removed: NSSet<any>): void;

  overridePoints(): NSArray<any>;
  availableOverrides(): NSArray<any>;
  overrides(): NSDictionary<any, any>;
  setOverrides(overrides: NSDictionary<any, any> | {[key: string]: any}): void;
  overrideContainer(): MSOverrideRepresentationContainer;
  modifiedMaster(): MSImmutableSymbolMaster;
  influencingSymbolIDs(): NSSet<any>;
}

declare const MSSymbolInstance: {
  alloc(): MSSymbolInstanceUninitialized;
  class(): MSSymbolInstance;
}

