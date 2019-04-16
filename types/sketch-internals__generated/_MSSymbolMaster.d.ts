interface _MSSymbolMasterUninitialized<InitializedType = _MSSymbolMaster> extends MSArtboardGroupUninitialized<_MSSymbolMaster> {}

interface _MSSymbolMaster extends MSArtboardGroup {

  allowsOverrides(): boolean;
  setAllowsOverrides(allowsOverrides: boolean): void;
  includeBackgroundColorInInstance(): boolean;
  setIncludeBackgroundColorInInstance(includeBackgroundColorInInstance: boolean): void;
  symbolID(): NSString;
  setSymbolID(symbolID: NSString | string): void;
}

declare const _MSSymbolMaster: {
  alloc(): _MSSymbolMasterUninitialized;
  class(): _MSSymbolMaster;
  artboardRectFromLayersInArray(layers: MSLayerArray): NSRect;
}

