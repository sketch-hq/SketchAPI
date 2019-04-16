interface NSSliderTouchBarItemUninitialized<InitializedType = NSSliderTouchBarItem> extends NSTouchBarItemUninitialized<NSSliderTouchBarItem> {}

interface NSSliderTouchBarItem extends NSTouchBarItem {

  view(): NSView;
  slider(): NSSlider;
  setSlider(slider: NSSlider): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
  minimumValueAccessory(): NSSliderAccessory;
  setMinimumValueAccessory(minimumValueAccessory: NSSliderAccessory): void;
  maximumValueAccessory(): NSSliderAccessory;
  setMaximumValueAccessory(maximumValueAccessory: NSSliderAccessory): void;
  valueAccessoryWidth(): NSSliderAccessoryWidth;
  setValueAccessoryWidth(valueAccessoryWidth: NSSliderAccessoryWidth): void;
  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
}

declare const NSSliderTouchBarItem: {
  alloc(): NSSliderTouchBarItemUninitialized;
  class(): NSSliderTouchBarItem;
}

