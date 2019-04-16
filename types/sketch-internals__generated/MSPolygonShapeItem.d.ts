interface MSPolygonShapeItemUninitialized<InitializedType = MSPolygonShapeItem> extends MSCustomShapeItemUninitialized<MSPolygonShapeItem> {}

interface MSPolygonShapeItem extends MSCustomShapeItem {
}

declare const MSPolygonShapeItem: {
  alloc(): MSPolygonShapeItemUninitialized;
  class(): MSPolygonShapeItem;
}

