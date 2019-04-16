interface MSBaseBlurInspectorItemUninitialized<InitializedType = MSBaseBlurInspectorItem> extends MSStylePartInspectorItemUninitialized<MSBaseBlurInspectorItem> {}
interface MSBaseBlurInspectorItem extends MSStylePartInspectorItem, IMSInspectorValueAdaptorDelegate {

  radiusField(): MSUpDownTextField;
  setRadiusField(radiusField: MSUpDownTextField): void;
  radiusSlider(): NSSlider;
  setRadiusSlider(radiusSlider: NSSlider): void;
}
declare const MSBaseBlurInspectorItem: {
  alloc(): MSBaseBlurInspectorItemUninitialized;
  class(): MSBaseBlurInspectorItem;
}

