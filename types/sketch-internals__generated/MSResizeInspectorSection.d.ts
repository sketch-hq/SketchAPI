interface MSResizeInspectorSectionUninitialized<InitializedType = MSResizeInspectorSection> extends MSBaseInspectorSectionUninitialized<MSResizeInspectorSection> {}
interface MSResizeInspectorSection extends MSBaseInspectorSection {
}
declare const MSResizeInspectorSection: {
  alloc(): MSResizeInspectorSectionUninitialized;
  class(): MSResizeInspectorSection;
}

