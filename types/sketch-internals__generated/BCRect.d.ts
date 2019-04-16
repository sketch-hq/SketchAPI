interface BCRectUninitialized<InitializedType = BCRect> extends NSObjectUninitialized<BCRect> {
  initWithRect(aRect: CGRect): InitializedType;
}
interface BCRect extends NSObject, INSCopying, IBCRect {

  rect(): CGRect;
  setRect(rect: CGRect): void;
  size(): CGSize;
  setSize(size: CGSize): void;
}
declare const BCRect: {
  alloc(): BCRectUninitialized;
  class(): BCRect;  rectWithRect(aRect: CGRect): BCRect;

}

