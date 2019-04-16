interface _MSImmutableRectUninitialized<InitializedType = _MSImmutableRect> extends MSImmutableModelObjectUninitialized<_MSImmutableRect> {}
interface _MSImmutableRect extends MSImmutableModelObject {

  constrainProportions(): boolean;
  height(): CGFloat;
  width(): CGFloat;
  x(): CGFloat;
  y(): CGFloat;
}
declare const _MSImmutableRect: {
  alloc(): _MSImmutableRectUninitialized;
  class(): _MSImmutableRect;
}

