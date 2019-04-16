interface MSBaseGridUninitialized<InitializedType = MSBaseGrid> extends _MSBaseGridUninitialized<MSBaseGrid> {}
interface MSBaseGrid extends _MSBaseGrid {
  verticalGuidesForRulerData_inRect(ruler: MSRulerData, aRect: NSRect): NSArray<any>;
  horizontalGuidesForRulerData_inRect(ruler: MSRulerData, aRect: NSRect): NSArray<any>;

  forceDraw(): boolean;
  setForceDraw(forceDraw: boolean): void;
}
declare const MSBaseGrid: {
  alloc(): MSBaseGridUninitialized;
  class(): MSBaseGrid;
}

