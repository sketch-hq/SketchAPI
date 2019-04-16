interface MSSVGCompositeUninitialized<InitializedType = MSSVGComposite> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGComposite> {}
interface MSSVGComposite extends MSSVGfeFilterPrimitive {

  in(): NSString;
  setIn(in_: NSString | string): void;
  in2(): NSString;
  setIn2(in2: NSString | string): void;
  operator(): NSString;
  setOperator(operator: NSString | string): void;
  k1(): CGFloat;
  setK1(k1: CGFloat): void;
  k2(): CGFloat;
  setK2(k2: CGFloat): void;
  k3(): CGFloat;
  setK3(k3: CGFloat): void;
  k4(): CGFloat;
  setK4(k4: CGFloat): void;
}
declare const MSSVGComposite: {
  alloc(): MSSVGCompositeUninitialized;
  class(): MSSVGComposite;
}

