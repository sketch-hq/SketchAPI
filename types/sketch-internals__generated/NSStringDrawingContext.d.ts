interface NSStringDrawingContextUninitialized<InitializedType = NSStringDrawingContext> extends NSObjectUninitialized<NSStringDrawingContext> {}
interface NSStringDrawingContext extends NSObject {

  minimumScaleFactor(): CGFloat;
  setMinimumScaleFactor(minimumScaleFactor: CGFloat): void;
  actualScaleFactor(): CGFloat;
  totalBounds(): NSRect;
}
declare const NSStringDrawingContext: {
  alloc(): NSStringDrawingContextUninitialized;
  class(): NSStringDrawingContext;
}

