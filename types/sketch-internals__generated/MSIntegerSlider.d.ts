interface MSIntegerSliderUninitialized<InitializedType = MSIntegerSlider> extends NSSliderUninitialized<MSIntegerSlider> {}
interface MSIntegerSlider extends NSSlider {
}
declare const MSIntegerSlider: {
  alloc(): MSIntegerSliderUninitialized;
  class(): MSIntegerSlider;
}

