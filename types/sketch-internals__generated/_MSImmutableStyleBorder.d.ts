interface _MSImmutableStyleBorderUninitialized<InitializedType = _MSImmutableStyleBorder> extends MSImmutableStyleBasicFillUninitialized<_MSImmutableStyleBorder> {}

interface _MSImmutableStyleBorder extends MSImmutableStyleBasicFill {

  position(): MSBorderPositionType;
  thickness(): CGFloat;
}

declare const _MSImmutableStyleBorder: {
  alloc(): _MSImmutableStyleBorderUninitialized;
  class(): _MSImmutableStyleBorder;
}

