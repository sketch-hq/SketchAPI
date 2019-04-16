interface MSSimpleGridUninitialized<InitializedType = MSSimpleGrid> extends _MSSimpleGridUninitialized<MSSimpleGrid> {}
interface MSSimpleGrid extends _MSSimpleGrid {
  horizontalGuidesForRulerData_inRect(rulerData: MSRulerData, rect: NSRect): NSArray<any>;
  verticalGuidesForRulerData_inRect(rulerData: MSRulerData, rect: NSRect): NSArray<any>;
}
declare const MSSimpleGrid: {
  alloc(): MSSimpleGridUninitialized;
  class(): MSSimpleGrid;
}

