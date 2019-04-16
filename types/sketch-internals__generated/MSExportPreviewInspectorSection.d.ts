interface MSExportPreviewInspectorSectionUninitialized<InitializedType = MSExportPreviewInspectorSection> extends MSBaseInspectorSectionUninitialized<MSExportPreviewInspectorSection> {}

interface MSExportPreviewInspectorSection extends MSBaseInspectorSection {

  hasContent(): boolean;
}

declare const MSExportPreviewInspectorSection: {
  alloc(): MSExportPreviewInspectorSectionUninitialized;
  class(): MSExportPreviewInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

