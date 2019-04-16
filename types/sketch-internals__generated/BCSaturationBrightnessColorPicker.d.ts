interface BCSaturationBrightnessColorPickerUninitialized<InitializedType = BCSaturationBrightnessColorPicker> extends BCColorPickerBaseViewUninitialized<BCSaturationBrightnessColorPicker> {}

interface BCSaturationBrightnessColorPicker extends BCColorPickerBaseView {
}

declare const BCSaturationBrightnessColorPicker: {
  alloc(): BCSaturationBrightnessColorPickerUninitialized;
  class(): BCSaturationBrightnessColorPicker;
  drawFrameInRect_forView_block(contentRect: NSRect, view: NSView, block: BCVoidBlock): void;
  drawFrameInRect_outlineWidth_cornerRadius_block(contentRect: NSRect, lineWidth: CGFloat, cornerRadius: CGFloat, block: BCVoidBlock): void;
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

