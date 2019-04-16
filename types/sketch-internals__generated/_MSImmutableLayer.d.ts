interface _MSImmutableLayerUninitialized<InitializedType = _MSImmutableLayer> extends MSImmutableModelObjectUninitialized<_MSImmutableLayer> {}
interface _MSImmutableLayer extends MSImmutableModelObject {

  booleanOperation(): MSBooleanOperation;
  isFixedToViewport(): boolean;
  isFlippedHorizontal(): boolean;
  isFlippedVertical(): boolean;
  isLocked(): boolean;
  isVisible(): boolean;
  layerListExpandedType(): MSLayerListStatus;
  name(): NSString;
  nameIsFixed(): boolean;
  originalObjectID(): NSString;
  resizingConstraint(): BCConstraint;
  resizingType(): MSLayerResizingType;
  rotation(): CGFloat;
  shouldBreakMaskChain(): boolean;
  userInfo(): NSDictionary<any, any>;
  exportOptions(): MSImmutableExportOptions;
  flow(): MSImmutableFlowConnection;
  frame(): MSImmutableRect;
}
declare const _MSImmutableLayer: {
  alloc(): _MSImmutableLayerUninitialized;
  class(): _MSImmutableLayer;
}

