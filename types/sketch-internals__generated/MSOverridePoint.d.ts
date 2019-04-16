interface MSOverridePointUninitialized<InitializedType = MSOverridePoint> extends NSObjectUninitialized<MSOverridePoint> {
  initWithLayer_property_parent(layer: MSImmutableLayer, property: NSString | string, parent: MSOverridePoint | null): InitializedType;
}
interface MSOverridePoint extends NSObject {
  comparisonScoreAgainst(point: MSOverridePoint): NSInteger;
  distanceToOverridePoint(point: MSOverridePoint): NSUInteger;
  canAcceptDataOfType(dataType: NSString | string): boolean;

  layerID(): NSString;
  property(): NSString;
  name(): NSString;
  path(): NSString;
  pathComponents(): NSArray<any>;
  isSymbolOverride(): boolean;
  isStyleOverride(): boolean;
}
declare const MSOverridePoint: {
  alloc(): MSOverridePointUninitialized;
  class(): MSOverridePoint;
}

