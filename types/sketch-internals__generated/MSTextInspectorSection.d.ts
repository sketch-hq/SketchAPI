interface MSTextInspectorSectionUninitialized<InitializedType = MSTextInspectorSection> extends MSBaseInspectorSectionUninitialized<MSTextInspectorSection> {}

interface MSTextInspectorSection extends MSBaseInspectorSection {
}

declare const MSTextInspectorSection: {
  alloc(): MSTextInspectorSectionUninitialized;
  class(): MSTextInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

