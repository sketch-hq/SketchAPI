interface MSStarShapeItemUninitialized<InitializedType = MSStarShapeItem> extends MSCustomShapeItemUninitialized<MSStarShapeItem> {}

interface MSStarShapeItem extends MSCustomShapeItem {
}

declare const MSStarShapeItem: {
  alloc(): MSStarShapeItemUninitialized;
  class(): MSStarShapeItem;
}

