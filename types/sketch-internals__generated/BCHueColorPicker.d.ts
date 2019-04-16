interface BCHueColorPickerUninitialized<InitializedType = BCHueColorPicker> extends BCColorPickerSliderViewUninitialized<BCHueColorPicker> {}

interface BCHueColorPicker extends BCColorPickerSliderView {
}

declare const BCHueColorPicker: {
  alloc(): BCHueColorPickerUninitialized;
  class(): BCHueColorPicker;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

