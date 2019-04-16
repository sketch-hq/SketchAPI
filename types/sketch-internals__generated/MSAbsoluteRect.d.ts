interface MSAbsoluteRectUninitialized<InitializedType = MSAbsoluteRect> extends BCRectUninitialized<MSAbsoluteRect> {
  initWithLayer(layer: MSLayer): InitializedType;
}
interface MSAbsoluteRect extends BCRect {
  boundsContainsPoint(mouse: NSPoint): boolean;

  rulerOrigin(): CGPoint;
  setRulerOrigin(rulerOrigin: CGPoint): void;
}
declare const MSAbsoluteRect: {
  alloc(): MSAbsoluteRectUninitialized;
  class(): MSAbsoluteRect;
}

