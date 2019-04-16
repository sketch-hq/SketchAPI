interface MSImmutableRectUninitialized<InitializedType = MSImmutableRect> extends _MSImmutableRectUninitialized<MSImmutableRect> {
  initWithRect(aRect: NSRect): InitializedType;
  initWithRect_constrainProportions(aRect: NSRect, constraintProportions: boolean): InitializedType;
}
interface MSImmutableRect extends _MSImmutableRect, IMSRect {
}
declare const MSImmutableRect: {
  alloc(): MSImmutableRectUninitialized;
  class(): MSImmutableRect;
}

