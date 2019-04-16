interface SVGGradientStopUninitialized<InitializedType = SVGGradientStop> extends _SVGGradientStopUninitialized<SVGGradientStop> {}
interface SVGGradientStop extends _SVGGradientStop {
}
declare const SVGGradientStop: {
  alloc(): SVGGradientStopUninitialized;
  class(): SVGGradientStop;
}

