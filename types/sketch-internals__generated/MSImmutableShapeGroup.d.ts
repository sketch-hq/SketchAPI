interface MSImmutableShapeGroupUninitialized<InitializedType = MSImmutableShapeGroup> extends _MSImmutableShapeGroupUninitialized<MSImmutableShapeGroup> {}

interface MSImmutableShapeGroup extends _MSImmutableShapeGroup, IMSShapeGroup, IMSImmutablePathLayer {
  decoratedPathInBoundsInDocument_asSubpath(doc: MSImmutableDocumentData, asSubpath: boolean): MSPath;

  hasMarkers(): boolean;
  isPartOfClippingMask(): boolean;
  style(): MSImmutableStyle;
}

declare const MSImmutableShapeGroup: {
  alloc(): MSImmutableShapeGroupUninitialized;
  class(): MSImmutableShapeGroup;
}

