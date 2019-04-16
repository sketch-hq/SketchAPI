interface MSArtboardInspectorSectionUninitialized<InitializedType = MSArtboardInspectorSection> extends MSBaseInspectorSectionUninitialized<MSArtboardInspectorSection> {}
interface MSArtboardInspectorSection extends MSBaseInspectorSection {
}
declare const MSArtboardInspectorSection: {
  alloc(): MSArtboardInspectorSectionUninitialized;
  class(): MSArtboardInspectorSection;
}

