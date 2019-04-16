interface MSGeometryInspectorSectionUninitialized<InitializedType = MSGeometryInspectorSection> extends MSBaseInspectorSectionUninitialized<MSGeometryInspectorSection> {}

interface MSGeometryInspectorSection extends MSBaseInspectorSection {
}

declare const MSGeometryInspectorSection: {
  alloc(): MSGeometryInspectorSectionUninitialized;
  class(): MSGeometryInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

