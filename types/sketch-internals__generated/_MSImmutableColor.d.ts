interface _MSImmutableColorUninitialized<InitializedType = _MSImmutableColor> extends MSImmutableModelObjectUninitialized<_MSImmutableColor> {}
interface _MSImmutableColor extends MSImmutableModelObject {

  alpha(): CGFloat;
  blue(): CGFloat;
  green(): CGFloat;
  red(): CGFloat;
}
declare const _MSImmutableColor: {
  alloc(): _MSImmutableColorUninitialized;
  class(): _MSImmutableColor;
}

