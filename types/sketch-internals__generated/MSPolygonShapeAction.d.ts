interface MSPolygonShapeActionUninitialized<InitializedType = MSPolygonShapeAction> extends MSBaseShapeActionUninitialized<MSPolygonShapeAction> {}

interface MSPolygonShapeAction extends MSBaseShapeAction {
}

declare const MSPolygonShapeAction: {
  alloc(): MSPolygonShapeActionUninitialized;
  class(): MSPolygonShapeAction;
  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;
}

