interface MSSharedSymbolStylesInspectorItemUninitialized<InitializedType = MSSharedSymbolStylesInspectorItem> extends MSSharedStylesInspectorItemUninitialized<MSSharedSymbolStylesInspectorItem> {}

interface MSSharedSymbolStylesInspectorItem extends MSSharedStylesInspectorItem {
}

declare const MSSharedSymbolStylesInspectorItem: {
  alloc(): MSSharedSymbolStylesInspectorItemUninitialized;
  class(): MSSharedSymbolStylesInspectorItem;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

