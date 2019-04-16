interface MSRectangleShapeItemUninitialized<InitializedType = MSRectangleShapeItem> extends MSCustomShapeItemUninitialized<MSRectangleShapeItem> {}
interface MSRectangleShapeItem extends MSCustomShapeItem {
}
declare const MSRectangleShapeItem: {
  alloc(): MSRectangleShapeItemUninitialized;
  class(): MSRectangleShapeItem;
}

