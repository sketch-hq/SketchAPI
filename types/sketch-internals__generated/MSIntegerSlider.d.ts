interface MSIntegerSliderUninitialized<InitializedType = MSIntegerSlider> extends NSSliderUninitialized<MSIntegerSlider> {}

interface MSIntegerSlider extends NSSlider {
}

declare const MSIntegerSlider: {
  alloc(): MSIntegerSliderUninitialized;
  class(): MSIntegerSlider;
  sliderWithTarget_action(target: any | null, action: string | null): MSIntegerSlider;
  sliderWithValue_minValue_maxValue_target_action(value: number, minValue: number, maxValue: number, target: any | null, action: string | null): MSIntegerSlider;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

