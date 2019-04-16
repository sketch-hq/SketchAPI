interface MSSymbolMasterSectionUninitialized<InitializedType = MSSymbolMasterSection> extends MSArtboardInspectorSectionUninitialized<MSSymbolMasterSection> {}

interface MSSymbolMasterSection extends MSArtboardInspectorSection {
}

declare const MSSymbolMasterSection: {
  alloc(): MSSymbolMasterSectionUninitialized;
  class(): MSSymbolMasterSection;
}

