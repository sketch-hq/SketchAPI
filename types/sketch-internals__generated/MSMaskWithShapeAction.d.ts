interface MSMaskWithShapeActionUninitialized<InitializedType = MSMaskWithShapeAction> extends MSDocumentActionUninitialized<MSMaskWithShapeAction> {}
interface MSMaskWithShapeAction extends MSDocumentAction {
  maskWithShape(sender: any): IBAction;
}
declare const MSMaskWithShapeAction: {
  alloc(): MSMaskWithShapeActionUninitialized;
  class(): MSMaskWithShapeAction;
}

