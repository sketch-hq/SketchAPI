interface MSBackgroundBlurInspectorItemUninitialized<InitializedType = MSBackgroundBlurInspectorItem> extends MSBaseBlurInspectorItemUninitialized<MSBackgroundBlurInspectorItem> {}

interface MSBackgroundBlurInspectorItem extends MSBaseBlurInspectorItem {

  saturationField(): MSInlineUpDownTextField;
  setSaturationField(saturationField: MSInlineUpDownTextField): void;
  saturationSlider(): NSSlider;
  setSaturationSlider(saturationSlider: NSSlider): void;
}

declare const MSBackgroundBlurInspectorItem: {
  alloc(): MSBackgroundBlurInspectorItemUninitialized;
  class(): MSBackgroundBlurInspectorItem;
}

