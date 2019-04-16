interface MSBaseBlurInspectorItemUninitialized<InitializedType = MSBaseBlurInspectorItem> extends MSStylePartInspectorItemUninitialized<MSBaseBlurInspectorItem> {}

interface MSBaseBlurInspectorItem extends MSStylePartInspectorItem, IMSInspectorValueAdaptorDelegate {
  inspectorValueAdaptor_changeValueUsingBlock(adaptor: MSInspectorValueAdaptor, block: BCVoidBlock): void;
  inspectorValueAdaptor_validateValue_forModel_context(adaptor: MSInspectorValueAdaptor, value: ModelValueType | null, model: any, context: any | null): boolean;
  inspectorValueAdaptorDidChangeValue(adaptor: MSInspectorValueAdaptor): void;
  inspectorValueAdaptor_didEncounterError(adaptor: MSInspectorValueAdaptor, error: NSError): void;

  radiusField(): MSUpDownTextField;
  setRadiusField(radiusField: MSUpDownTextField): void;
  radiusSlider(): NSSlider;
  setRadiusSlider(radiusSlider: NSSlider): void;
}

declare const MSBaseBlurInspectorItem: {
  alloc(): MSBaseBlurInspectorItemUninitialized;
  class(): MSBaseBlurInspectorItem;
}

