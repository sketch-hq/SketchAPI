interface MSBaseShapeActionUninitialized<InitializedType = MSBaseShapeAction> extends MSBaseInsertActionUninitialized<MSBaseShapeAction> {}
interface MSBaseShapeAction extends MSBaseInsertAction {
  prototypeLayer(): MSShapePathLayer;
}
declare const MSBaseShapeAction: {
  alloc(): MSBaseShapeActionUninitialized;
  class(): MSBaseShapeAction;  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;

}

