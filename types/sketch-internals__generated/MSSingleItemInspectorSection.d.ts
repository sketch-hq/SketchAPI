interface MSSingleItemInspectorSectionUninitialized<InitializedType = MSSingleItemInspectorSection> extends MSBaseInspectorSectionUninitialized<MSSingleItemInspectorSection> {}

interface MSSingleItemInspectorSection extends MSBaseInspectorSection {
}

declare const MSSingleItemInspectorSection: {
  alloc(): MSSingleItemInspectorSectionUninitialized;
  class(): MSSingleItemInspectorSection;
  itemClass(): any;
  canHandleLayer(layer: MSLayer): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

