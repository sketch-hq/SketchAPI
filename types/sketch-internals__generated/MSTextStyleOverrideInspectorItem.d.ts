interface MSTextStyleOverrideInspectorItemUninitialized<InitializedType = MSTextStyleOverrideInspectorItem> extends MSStyleOverrideInspectorItemUninitialized<MSTextStyleOverrideInspectorItem> {}

interface MSTextStyleOverrideInspectorItem extends MSStyleOverrideInspectorItem {
}

declare const MSTextStyleOverrideInspectorItem: {
  alloc(): MSTextStyleOverrideInspectorItemUninitialized;
  class(): MSTextStyleOverrideInspectorItem;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

