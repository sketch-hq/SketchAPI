interface MSScaleSheetUninitialized<InitializedType = MSScaleSheet> extends MSCanvasUpdatingSheetUninitialized<MSScaleSheet> {}
interface MSScaleSheet extends MSCanvasUpdatingSheet {
}
declare const MSScaleSheet: {
  alloc(): MSScaleSheetUninitialized;
  class(): MSScaleSheet;
}

