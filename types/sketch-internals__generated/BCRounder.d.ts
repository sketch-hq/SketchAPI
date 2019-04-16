interface BCRounderUninitialized<InitializedType = BCRounder> extends NSObjectUninitialized<BCRounder> {
  initWithRoundingIncrement(roundingIncrement: CGFloat): InitializedType;
  init(): InitializedType;
}
interface BCRounder extends NSObject {
  roundPoint(point: CGPoint): CGPoint;
  roundPoint_mask(point: CGPoint, mask: BCAxisMask): CGPoint;
  roundSize(point: CGSize): CGSize;
  roundSize_mask(point: CGSize, mask: BCAxisMask): CGSize;
  roundVector(vector: CGVector): CGVector;
  roundVector_mask(vector: CGVector, mask: BCAxisMask): CGVector;
  roundedPoint_coordinateSpace_inCoordinateSpace(p: NSPoint, currentSpace: MSLayer, roundingSpace: any | null): NSPoint;

  roundingIncrement(): CGFloat;
  setRoundingIncrement(roundingIncrement: CGFloat): void;
}
declare const BCRounder: {
  alloc(): BCRounderUninitialized;
  class(): BCRounder;  rounderWithPrecision(precision: MSVectorRounding): BCRounder;
  vectorRounder(): BCRounder;

}

