interface MSStarShapeSectionUninitialized<InitializedType = MSStarShapeSection> extends MSSingleItemInspectorSectionUninitialized<MSStarShapeSection> {}

interface MSStarShapeSection extends MSSingleItemInspectorSection {
}

declare const MSStarShapeSection: {
  alloc(): MSStarShapeSectionUninitialized;
  class(): MSStarShapeSection;
  itemClass(): any;
  canHandleLayer(layer: MSLayer): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

