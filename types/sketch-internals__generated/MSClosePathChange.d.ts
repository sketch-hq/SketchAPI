interface MSClosePathChangeUninitialized<InitializedType = MSClosePathChange> extends MSShapeChangeUninitialized<MSClosePathChange> {}
interface MSClosePathChange extends MSShapeChange {
  validateWithContext(context: MSShapeChangeContext): boolean;
  titleForContext(context: MSShapeChangeContext): NSString;
}
declare const MSClosePathChange: {
  alloc(): MSClosePathChangeUninitialized;
  class(): MSClosePathChange;  toggleClosePath(): MSClosePathChange;

}

