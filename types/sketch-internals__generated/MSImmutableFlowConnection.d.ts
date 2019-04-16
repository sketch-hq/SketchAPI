interface MSImmutableFlowConnectionUninitialized<InitializedType = MSImmutableFlowConnection> extends _MSImmutableFlowConnectionUninitialized<MSImmutableFlowConnection> {}

interface MSImmutableFlowConnection extends _MSImmutableFlowConnection {
  flowTypeForTransitionFromParentLayer_toArtboard(layer: MSImmutableLayerAncestry, artboard: MSImmutableLayerAncestry): MSFlowType;
  flowInfoFromParentLayer_toArtboard(layer: MSImmutableLayerAncestry, destinationArtboard: MSImmutableLayerAncestry): MSFlowInfo;
  flowInfoFromParentLayer_toArtboard_type(layer: MSImmutableLayerAncestry, destinationArtboard: MSImmutableLayerAncestry, flowType: MSFlowType): MSFlowInfo;
  isValidFlowConnectionInDocumentData(documentData: MSImmutableDocumentData): boolean;

  isBackAction(): boolean;
}

declare const MSImmutableFlowConnection: {
  alloc(): MSImmutableFlowConnectionUninitialized;
  class(): MSImmutableFlowConnection;
}

