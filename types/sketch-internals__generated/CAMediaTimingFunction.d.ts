interface CAMediaTimingFunctionUninitialized<InitializedType = CAMediaTimingFunction> extends NSObjectUninitialized<CAMediaTimingFunction> {
  initWithControlPoints___(c1x: number, c1y: number, c2x: number, c2y: number): InitializedType;
}
interface CAMediaTimingFunction extends NSObject, INSSecureCoding {
  getControlPointAtIndex_values(idx: size_t, ptr: [number, number]): void;
}
declare const CAMediaTimingFunction: {
  alloc(): CAMediaTimingFunctionUninitialized;
  class(): CAMediaTimingFunction;  functionWithName(name: CAMediaTimingFunctionName): CAMediaTimingFunction;
  functionWithControlPoints___(c1x: number, c1y: number, c2x: number, c2y: number): CAMediaTimingFunction;

}

