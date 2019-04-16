interface MSBaseSizeInspectorItemUninitialized<InitializedType = MSBaseSizeInspectorItem> extends MSInspectorItemUninitialized<MSBaseSizeInspectorItem> {}
interface MSBaseSizeInspectorItem extends MSInspectorItem {
  updateUI(): void;

  widthAdapter(): MSSizeInspectorValueAdaptor;
  setWidthAdapter(widthAdapter: MSSizeInspectorValueAdaptor): void;
  heightAdapter(): MSSizeInspectorValueAdaptor;
  setHeightAdapter(heightAdapter: MSSizeInspectorValueAdaptor): void;
  widthField(): MSInlineUpDownTextField;
  heightField(): MSInlineUpDownTextField;
}
declare const MSBaseSizeInspectorItem: {
  alloc(): MSBaseSizeInspectorItemUninitialized;
  class(): MSBaseSizeInspectorItem;
}

