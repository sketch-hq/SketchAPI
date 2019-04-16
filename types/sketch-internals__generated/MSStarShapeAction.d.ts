interface MSStarShapeActionUninitialized<InitializedType = MSStarShapeAction> extends MSBaseShapeActionUninitialized<MSStarShapeAction> {}

interface MSStarShapeAction extends MSBaseShapeAction {
}

declare const MSStarShapeAction: {
  alloc(): MSStarShapeActionUninitialized;
  class(): MSStarShapeAction;
  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;
}

