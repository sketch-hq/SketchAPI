interface MSStyleInspectorSectionUninitialized<InitializedType = MSStyleInspectorSection> extends MSNestedInspectorSectionUninitialized<MSStyleInspectorSection> {}
interface MSStyleInspectorSection extends MSNestedInspectorSection {
  openPopoverForStylePart_atIndex_preferringNative(stylePart: MSStylePartType, index: NSUInteger, prefersNative: boolean): void;
  closeAnyColorPopover(): void;
  restorePopover(): void;
  showFillOptionsAction(sender: any): IBAction;
  showBorderOptionsAction(sender: any): IBAction;

  fillViewController(): MSMultipleFillInspectorViewController;
  borderViewController(): MSMultipleBorderInspectorViewController;
  shadowViewController(): MSMultipleShadowInspectorViewController;
  innerShadowViewController(): MSMultipleInnerShadowInspectorViewController;
  blurViewController(): MSBlurInspectorViewController;
  colorControlsViewController(): MSColorControlsInspectorViewController;
  hasContent(): boolean;
}
declare const MSStyleInspectorSection: {
  alloc(): MSStyleInspectorSectionUninitialized;
  class(): MSStyleInspectorSection;
}

