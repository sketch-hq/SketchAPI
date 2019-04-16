interface MSSVGMorphologyUninitialized<InitializedType = MSSVGMorphology> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGMorphology> {}

interface MSSVGMorphology extends MSSVGfeFilterPrimitive {

  in(): NSString;
  setIn(in_: NSString | string): void;
  operator(): NSString;
  setOperator(operator: NSString | string): void;
  radius(): CGFloat;
  setRadius(radius: CGFloat): void;
}

declare const MSSVGMorphology: {
  alloc(): MSSVGMorphologyUninitialized;
  class(): MSSVGMorphology;
  filter(): MSSVGMorphology;
}

