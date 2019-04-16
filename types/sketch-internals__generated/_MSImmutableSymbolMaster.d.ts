interface _MSImmutableSymbolMasterUninitialized<InitializedType = _MSImmutableSymbolMaster> extends MSImmutableArtboardGroupUninitialized<_MSImmutableSymbolMaster> {}

interface _MSImmutableSymbolMaster extends MSImmutableArtboardGroup {

  allowsOverrides(): boolean;
  includeBackgroundColorInInstance(): boolean;
  symbolID(): NSString;
}

declare const _MSImmutableSymbolMaster: {
  alloc(): _MSImmutableSymbolMasterUninitialized;
  class(): _MSImmutableSymbolMaster;
}

