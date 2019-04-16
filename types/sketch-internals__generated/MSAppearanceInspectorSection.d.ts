interface MSAppearanceInspectorSectionUninitialized<InitializedType = MSAppearanceInspectorSection> extends MSBaseInspectorSectionUninitialized<MSAppearanceInspectorSection> {}
interface MSAppearanceInspectorSection extends MSBaseInspectorSection {
  beginRenameSharedObject_completionBlock(sharedObject: MSSharedObject, block: MSRenameSharedObjectBlock): void;
}
declare const MSAppearanceInspectorSection: {
  alloc(): MSAppearanceInspectorSectionUninitialized;
  class(): MSAppearanceInspectorSection;
}

