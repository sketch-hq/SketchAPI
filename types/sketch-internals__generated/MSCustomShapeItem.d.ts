interface MSCustomShapeItemUninitialized<InitializedType = MSCustomShapeItem> extends MSInspectorItemUninitialized<MSCustomShapeItem> {}
interface MSCustomShapeItem extends MSInspectorItem {
  refreshAndResetAction(sender: any): IBAction;
}
declare const MSCustomShapeItem: {
  alloc(): MSCustomShapeItemUninitialized;
  class(): MSCustomShapeItem;
}

