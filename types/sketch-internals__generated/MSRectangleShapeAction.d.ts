interface MSRectangleShapeActionUninitialized<InitializedType = MSRectangleShapeAction> extends MSBaseShapeActionUninitialized<MSRectangleShapeAction> {}
interface MSRectangleShapeAction extends MSBaseShapeAction {
}
declare const MSRectangleShapeAction: {
  alloc(): MSRectangleShapeActionUninitialized;
  class(): MSRectangleShapeAction;
}

