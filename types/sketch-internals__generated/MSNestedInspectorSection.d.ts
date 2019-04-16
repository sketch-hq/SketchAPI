interface MSNestedInspectorSectionUninitialized<InitializedType = MSNestedInspectorSection> extends MSBaseInspectorSectionUninitialized<MSNestedInspectorSection> {}
interface MSNestedInspectorSection extends MSBaseInspectorSection, IMSInspectorSectionDelegate {
}
declare const MSNestedInspectorSection: {
  alloc(): MSNestedInspectorSectionUninitialized;
  class(): MSNestedInspectorSection;
}

