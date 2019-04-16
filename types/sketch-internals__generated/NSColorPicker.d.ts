interface NSColorPickerUninitialized<InitializedType = NSColorPicker> extends NSObjectUninitialized<NSColorPicker> {
  initWithPickerMask_colorPanel(mask: NSUInteger, owningColorPanel: NSColorPanel): InitializedType;
}
interface NSColorPicker extends NSObject, INSColorPickingDefault {
  insertNewButtonImage_in(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
  viewSizeChanged(sender: any | null): void;
  attachColorList(colorList: NSColorList): void;
  detachColorList(colorList: NSColorList): void;
  setMode(mode: NSColorPanelMode): void;

  colorPanel(): NSColorPanel;
  provideNewButtonImage(): NSImage;
  buttonToolTip(): NSString;
  minContentSize(): NSSize;
}
declare const NSColorPicker: {
  alloc(): NSColorPickerUninitialized;
  class(): NSColorPicker;
}

