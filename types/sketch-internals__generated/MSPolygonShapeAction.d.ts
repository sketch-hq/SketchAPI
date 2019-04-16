interface MSPolygonShapeActionUninitialized<InitializedType = MSPolygonShapeAction> extends MSBaseShapeActionUninitialized<MSPolygonShapeAction> {}
interface MSPolygonShapeAction extends MSBaseShapeAction {
}
declare const MSPolygonShapeAction: {
  alloc(): MSPolygonShapeActionUninitialized;
  class(): MSPolygonShapeAction;
}

