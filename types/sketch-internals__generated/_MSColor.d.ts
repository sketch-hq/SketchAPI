interface _MSColorUninitialized<InitializedType = _MSColor> extends MSModelObjectUninitialized<_MSColor> {}
interface _MSColor extends MSModelObject {

  alpha(): CGFloat;
  blue(): CGFloat;
  green(): CGFloat;
  red(): CGFloat;
}
declare const _MSColor: {
  alloc(): _MSColorUninitialized;
  class(): _MSColor;
}

