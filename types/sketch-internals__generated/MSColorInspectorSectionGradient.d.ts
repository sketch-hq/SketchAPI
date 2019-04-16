interface MSColorInspectorSectionGradientUninitialized<InitializedType = MSColorInspectorSectionGradient> extends MSColorInspectorSectionWithColorPickerUninitialized<MSColorInspectorSectionGradient> {}
interface MSColorInspectorSectionGradient extends MSColorInspectorSectionWithColorPicker, IMSGradientEventHandlerDelegate, IMSGradientBarViewDelegate {
  switchToGradientHandlerIfNecessary(): void;
  closeGradientHandler(): void;

  gradientBarView(): MSGradientBarView;
  setGradientBarView(gradientBarView: MSGradientBarView): void;
}
declare const MSColorInspectorSectionGradient: {
  alloc(): MSColorInspectorSectionGradientUninitialized;
  class(): MSColorInspectorSectionGradient;
}

