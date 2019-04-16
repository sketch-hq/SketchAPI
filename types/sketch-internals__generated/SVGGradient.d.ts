interface SVGGradientUninitialized<InitializedType = SVGGradient> extends _SVGGradientUninitialized<SVGGradient> {}
interface SVGGradient extends _SVGGradient {
  from(): NSPoint;
  to(): NSPoint;
  stopsElements(): NSArray<any>;

  usesAbsoluteUnits(): boolean;
}
declare const SVGGradient: {
  alloc(): SVGGradientUninitialized;
  class(): SVGGradient;
}

