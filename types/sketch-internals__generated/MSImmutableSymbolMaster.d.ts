interface MSImmutableSymbolMasterUninitialized<InitializedType = MSImmutableSymbolMaster> extends _MSImmutableSymbolMasterUninitialized<MSImmutableSymbolMaster> {}
interface MSImmutableSymbolMaster extends _MSImmutableSymbolMaster {
  modifiedMasterByApplyingInstance_inDocument(instance: MSImmutableSymbolInstance, document: MSImmutableDocumentData): MSImmutableSymbolMaster;
  modifiedMasterWithOverrides_scale_size_inDocument(overrideValues: NSArray<any> | any[], scale: CGFloat, size: NSSize, document: MSImmutableDocumentData): MSImmutableSymbolMaster;
  influenceRectPaddingForInstancesInDocument_visitedSymbols(doc: MSImmutableDocumentData, visitedSymbols: NSSet<any>): BCEdgePaddings;
  availableOverridesWithDocument(document: MSImmutableDocumentData): NSArray<any>;
  calculateAvailableOverridesWithDocument(document: MSImmutableDocumentData): NSArray<any>;

  changeIdentifier(): NSInteger;
  overrideProperies(): NSDictionary<any, any>;
}
declare const MSImmutableSymbolMaster: {
  alloc(): MSImmutableSymbolMasterUninitialized;
  class(): MSImmutableSymbolMaster;
}

