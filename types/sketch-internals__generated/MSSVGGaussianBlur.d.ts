interface MSSVGGaussianBlurUninitialized<InitializedType = MSSVGGaussianBlur> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGGaussianBlur> {}

interface MSSVGGaussianBlur extends MSSVGfeFilterPrimitive {

  in(): NSString;
  setIn(in_: NSString | string): void;
  stdDeviation(): NSString;
  setStdDeviation(stdDeviation: NSString | string): void;
}

declare const MSSVGGaussianBlur: {
  alloc(): MSSVGGaussianBlurUninitialized;
  class(): MSSVGGaussianBlur;
  filter(): MSSVGGaussianBlur;
}

