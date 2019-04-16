interface MSFlowItemBufferOperationUninitialized<InitializedType = MSFlowItemBufferOperation> extends NSOperationUninitialized<MSFlowItemBufferOperation> {
  initWithFlowItem_clipToArtboards_zoomLevel(item: MSFlowItem, clipToArtboards: boolean, zoomLevel: CGFloat): InitializedType;
}

interface MSFlowItemBufferOperation extends NSOperation {

  item(): MSFlowItem;
  clipToArtboards(): boolean;
  zoomLevel(): CGFloat;
  buffer(): MSArcVertexBuffer;
}

declare const MSFlowItemBufferOperation: {
  alloc(): MSFlowItemBufferOperationUninitialized;
  class(): MSFlowItemBufferOperation;
  accessInstanceVariablesDirectly(): boolean;

}

