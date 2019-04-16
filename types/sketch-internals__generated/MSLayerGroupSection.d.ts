interface MSLayerGroupSectionUninitialized<InitializedType = MSLayerGroupSection> extends MSSingleItemInspectorSectionUninitialized<MSLayerGroupSection> {}
interface MSLayerGroupSection extends MSSingleItemInspectorSection {
}
declare const MSLayerGroupSection: {
  alloc(): MSLayerGroupSectionUninitialized;
  class(): MSLayerGroupSection;
}

