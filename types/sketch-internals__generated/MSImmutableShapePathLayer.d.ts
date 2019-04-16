interface MSImmutableShapePathLayerUninitialized<InitializedType = MSImmutableShapePathLayer> extends _MSImmutableShapePathLayerUninitialized<MSImmutableShapePathLayer> {}
interface MSImmutableShapePathLayer extends _MSImmutableShapePathLayer, IMSImmutablePathLayer {
  migratePropertiesFromShapeGroup(shape: MSImmutableShapeGroup): void;
  migrateByTakingStyleFrom(shape: MSImmutableShapeGroup): void;

  isEditing(): boolean;
  usedStyle(): MSImmutableStyle;
  isPolygon(): boolean;
  isPolyline(): boolean;
  isRectangle(): boolean;
  numberOfCurvePoints(): NSUInteger;
}
declare const MSImmutableShapePathLayer: {
  alloc(): MSImmutableShapePathLayerUninitialized;
  class(): MSImmutableShapePathLayer;
}

