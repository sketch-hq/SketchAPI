interface MSSVGOffsetUninitialized<InitializedType = MSSVGOffset> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGOffset> {}
interface MSSVGOffset extends MSSVGfeFilterPrimitive {

  in(): NSString;
  setIn(in_: NSString | string): void;
  dx(): CGFloat;
  setDx(dx: CGFloat): void;
  dy(): CGFloat;
  setDy(dy: CGFloat): void;
}
declare const MSSVGOffset: {
  alloc(): MSSVGOffsetUninitialized;
  class(): MSSVGOffset;
}

