interface MSGradientBarViewUninitialized<InitializedType = MSGradientBarView> extends BCColorPickerSliderViewUninitialized<MSGradientBarView> {}
interface MSGradientBarView extends BCColorPickerSliderView {

  delegate(): any;
  setDelegate(delegate: any): void;
  gradient(): MSGradient;
  setGradient(gradient: MSGradient): void;
  selectedStopIndex(): NSUInteger;
  setSelectedStopIndex(selectedStopIndex: NSUInteger): void;
}
declare const MSGradientBarView: {
  alloc(): MSGradientBarViewUninitialized;
  class(): MSGradientBarView;
}

