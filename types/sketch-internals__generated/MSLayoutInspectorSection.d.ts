interface MSLayoutInspectorSectionUninitialized<InitializedType = MSLayoutInspectorSection> extends MSBaseInspectorSectionUninitialized<MSLayoutInspectorSection> {}
interface MSLayoutInspectorSection extends MSBaseInspectorSection {
}
declare const MSLayoutInspectorSection: {
  alloc(): MSLayoutInspectorSectionUninitialized;
  class(): MSLayoutInspectorSection;
}

