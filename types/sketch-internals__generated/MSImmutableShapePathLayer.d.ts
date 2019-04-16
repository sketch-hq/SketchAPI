interface MSImmutableShapePathLayerUninitialized<InitializedType = MSImmutableShapePathLayer> extends _MSImmutableShapePathLayerUninitialized<MSImmutableShapePathLayer> {}

interface MSImmutableShapePathLayer extends _MSImmutableShapePathLayer, IMSImmutablePathLayer {
  migratePropertiesFromShapeGroup(shape: MSImmutableShapeGroup): void;
  migrateByTakingStyleFrom(shape: MSImmutableShapeGroup): void;
  decoratedPathInBoundsInDocument_asSubpath(doc: MSImmutableDocumentData, asSubpath: boolean): MSPath;

  isEditing(): boolean;
  usedStyle(): MSImmutableStyle;
  isPolygon(): boolean;
  isPolyline(): boolean;
  isRectangle(): boolean;
  numberOfCurvePoints(): NSUInteger;
  hasMarkers(): boolean;
  style(): MSImmutableStyle;
}

declare const MSImmutableShapePathLayer: {
  alloc(): MSImmutableShapePathLayerUninitialized;
  class(): MSImmutableShapePathLayer;
}

