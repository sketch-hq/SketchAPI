interface MSColorInspectorSectionGradientUninitialized<InitializedType = MSColorInspectorSectionGradient> extends MSColorInspectorSectionWithColorPickerUninitialized<MSColorInspectorSectionGradient> {}

interface MSColorInspectorSectionGradient extends MSColorInspectorSectionWithColorPicker, IMSGradientEventHandlerDelegate, IMSGradientBarViewDelegate {
  switchToGradientHandlerIfNecessary(): void;
  closeGradientHandler(): void;
  gradientHandlerDidChangeCurrentPoint(handler: MSGradientEventHandler): void;
  gradientHandlerDidChangeGradient(handler: MSGradientEventHandler): void;
  gradientHandlerWillLoseFocus(handler: MSGradientEventHandler): void;
  gradientBarViewPreviewColorSpace(gradientBarView: MSGradientBarView): NSColorSpace;
  gradientBarChanged(gradientView: MSGradientBarView): void;

  gradientBarView(): MSGradientBarView;
  setGradientBarView(gradientBarView: MSGradientBarView): void;
}

declare const MSColorInspectorSectionGradient: {
  alloc(): MSColorInspectorSectionGradientUninitialized;
  class(): MSColorInspectorSectionGradient;
}

