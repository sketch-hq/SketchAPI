interface MSPositionInspectorItemUninitialized<InitializedType = MSPositionInspectorItem> extends MSInspectorItemUninitialized<MSPositionInspectorItem> {}
interface MSPositionInspectorItem extends MSInspectorItem {

  yField(): MSInlineUpDownTextField;
  rotationField(): MSInlineUpDownTextField;
}
declare const MSPositionInspectorItem: {
  alloc(): MSPositionInspectorItemUninitialized;
  class(): MSPositionInspectorItem;
}

