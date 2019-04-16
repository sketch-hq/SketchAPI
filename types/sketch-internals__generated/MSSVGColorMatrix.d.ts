interface MSSVGColorMatrixUninitialized<InitializedType = MSSVGColorMatrix> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGColorMatrix> {}

interface MSSVGColorMatrix extends MSSVGfeFilterPrimitive {

  in(): NSString;
  setIn(in_: NSString | string): void;
  type(): NSString;
  setType(type: NSString | string): void;
  values(): NSString;
  setValues(values: NSString | string): void;
}

declare const MSSVGColorMatrix: {
  alloc(): MSSVGColorMatrixUninitialized;
  class(): MSSVGColorMatrix;
  colorMatrixForColor(color: MSImmutableColor): MSSVGColorMatrix;
  filter(): MSSVGColorMatrix;
}

