interface MSRoundedRectangleShapeActionUninitialized<InitializedType = MSRoundedRectangleShapeAction> extends MSBaseShapeActionUninitialized<MSRoundedRectangleShapeAction> {}

interface MSRoundedRectangleShapeAction extends MSBaseShapeAction {
}

declare const MSRoundedRectangleShapeAction: {
  alloc(): MSRoundedRectangleShapeActionUninitialized;
  class(): MSRoundedRectangleShapeAction;
  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;
}

