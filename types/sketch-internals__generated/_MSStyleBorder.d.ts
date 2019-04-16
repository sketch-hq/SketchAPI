interface _MSStyleBorderUninitialized<InitializedType = _MSStyleBorder> extends MSStyleBasicFillUninitialized<_MSStyleBorder> {}
interface _MSStyleBorder extends MSStyleBasicFill {

  position(): MSBorderPositionType;
  setPosition(position: MSBorderPositionType): void;
  thickness(): CGFloat;
  setThickness(thickness: CGFloat): void;
}
declare const _MSStyleBorder: {
  alloc(): _MSStyleBorderUninitialized;
  class(): _MSStyleBorder;
}

