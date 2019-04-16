interface MSPointInsertionUninitialized<InitializedType = MSPointInsertion> extends NSObjectUninitialized<MSPointInsertion> {}
interface MSPointInsertion extends NSObject {
}
declare const MSPointInsertion: {
  alloc(): MSPointInsertionUninitialized;
  class(): MSPointInsertion;  insertPointAtLocation_index_layer_options(location: NSPoint, index: NSUInteger, layer: MSShapePathLayer, options: MSPointInsertionOptions): MSCurvePoint;
  canInsertAtProposedLocation_index_layer_options(proposedPoint: NSPoint, index: NSUInteger, layer: MSShapePathLayer, options: MSPointInsertionOptions): boolean;

}

