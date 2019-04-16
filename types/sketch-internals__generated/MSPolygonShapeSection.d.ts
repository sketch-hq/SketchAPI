interface MSPolygonShapeSectionUninitialized<InitializedType = MSPolygonShapeSection> extends MSSingleItemInspectorSectionUninitialized<MSPolygonShapeSection> {}
interface MSPolygonShapeSection extends MSSingleItemInspectorSection {
}
declare const MSPolygonShapeSection: {
  alloc(): MSPolygonShapeSectionUninitialized;
  class(): MSPolygonShapeSection;
}

