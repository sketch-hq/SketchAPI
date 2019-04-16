interface MSAdaptableColorUninitialized<InitializedType = MSAdaptableColor> extends NSColorUninitialized<MSAdaptableColor> {}
interface MSAdaptableColor extends NSColor {
}
declare const MSAdaptableColor: {
  alloc(): MSAdaptableColorUninitialized;
  class(): MSAdaptableColor;
}

