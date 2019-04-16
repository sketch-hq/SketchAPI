interface BCHSBColorPickerUninitialized<InitializedType = BCHSBColorPicker> extends NSControlUninitialized<BCHSBColorPicker> {}

interface BCHSBColorPicker extends NSControl, IBCColorPreviewDelegate, IBCMagnifierButtonDelegate {
  setColor_multipleValues(color: MSFlexibleColor, multiple: boolean): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  color(): MSFlexibleColor;
  setColor(color: MSFlexibleColor): void;
}

declare const BCHSBColorPicker: {
  alloc(): BCHSBColorPickerUninitialized;
  class(): BCHSBColorPicker;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

