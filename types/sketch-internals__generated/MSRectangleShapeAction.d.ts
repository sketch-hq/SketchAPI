interface MSRectangleShapeActionUninitialized<InitializedType = MSRectangleShapeAction> extends MSBaseShapeActionUninitialized<MSRectangleShapeAction> {}

interface MSRectangleShapeAction extends MSBaseShapeAction {
}

declare const MSRectangleShapeAction: {
  alloc(): MSRectangleShapeActionUninitialized;
  class(): MSRectangleShapeAction;
  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;
}

