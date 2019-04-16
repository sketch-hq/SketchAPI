interface _MSRectUninitialized<InitializedType = _MSRect> extends MSModelObjectUninitialized<_MSRect> {}
interface _MSRect extends MSModelObject {

  constrainProportions(): boolean;
  setConstrainProportions(constrainProportions: boolean): void;
  height(): CGFloat;
  setHeight(height: CGFloat): void;
  width(): CGFloat;
  setWidth(width: CGFloat): void;
  x(): CGFloat;
  setX(x: CGFloat): void;
  y(): CGFloat;
  setY(y: CGFloat): void;
}
declare const _MSRect: {
  alloc(): _MSRectUninitialized;
  class(): _MSRect;
}

