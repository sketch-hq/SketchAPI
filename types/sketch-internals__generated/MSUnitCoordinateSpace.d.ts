interface MSUnitCoordinateSpaceUninitialized<InitializedType = MSUnitCoordinateSpace> extends NSObjectUninitialized<MSUnitCoordinateSpace> {}
interface MSUnitCoordinateSpace extends NSObject, IMSLayerCoordinateSpace {

  parentCoordinateSpace(): any;
  setParentCoordinateSpace(parentCoordinateSpace: any): void;
}
declare const MSUnitCoordinateSpace: {
  alloc(): MSUnitCoordinateSpaceUninitialized;
  class(): MSUnitCoordinateSpace;  convertPoint_fromBounds(point: CGPoint, bounds: CGRect): CGPoint;
  convertPoint_toBounds(point: CGPoint, bounds: CGRect): CGPoint;

}

