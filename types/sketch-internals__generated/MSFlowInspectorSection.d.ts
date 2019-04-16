interface MSFlowInspectorSectionUninitialized<InitializedType = MSFlowInspectorSection> extends MSBaseInspectorSectionUninitialized<MSFlowInspectorSection> {}

interface MSFlowInspectorSection extends MSBaseInspectorSection {
}

declare const MSFlowInspectorSection: {
  alloc(): MSFlowInspectorSectionUninitialized;
  class(): MSFlowInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

