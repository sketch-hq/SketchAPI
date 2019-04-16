interface MSThemedColorViewUninitialized<InitializedType = MSThemedColorView> extends MSColorViewUninitialized<MSThemedColorView> {}
interface MSThemedColorView extends MSColorView {

  colorName(): NSString;
  setColorName(colorName: NSString | string): void;
}
declare const MSThemedColorView: {
  alloc(): MSThemedColorViewUninitialized;
  class(): MSThemedColorView;
}

