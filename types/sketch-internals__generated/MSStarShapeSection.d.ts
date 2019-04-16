interface MSStarShapeSectionUninitialized<InitializedType = MSStarShapeSection> extends MSSingleItemInspectorSectionUninitialized<MSStarShapeSection> {}
interface MSStarShapeSection extends MSSingleItemInspectorSection {
}
declare const MSStarShapeSection: {
  alloc(): MSStarShapeSectionUninitialized;
  class(): MSStarShapeSection;
}

