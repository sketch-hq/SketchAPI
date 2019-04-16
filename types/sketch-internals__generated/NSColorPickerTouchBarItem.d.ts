interface NSColorPickerTouchBarItemUninitialized<InitializedType = NSColorPickerTouchBarItem> extends NSTouchBarItemUninitialized<NSColorPickerTouchBarItem> {}

interface NSColorPickerTouchBarItem extends NSTouchBarItem {

  color(): NSColor;
  setColor(color: NSColor): void;
  showsAlpha(): boolean;
  setShowsAlpha(showsAlpha: boolean): void;
  allowedColorSpaces(): NSArray<any>;
  setAllowedColorSpaces(allowedColorSpaces: NSArray<any> | any[]): void;
  colorList(): NSColorList;
  setColorList(colorList: NSColorList): void;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
}

declare const NSColorPickerTouchBarItem: {
  alloc(): NSColorPickerTouchBarItemUninitialized;
  class(): NSColorPickerTouchBarItem;
  colorPickerWithIdentifier(identifier: NSTouchBarItemIdentifier): NSColorPickerTouchBarItem;
  textColorPickerWithIdentifier(identifier: NSTouchBarItemIdentifier): NSColorPickerTouchBarItem;
  strokeColorPickerWithIdentifier(identifier: NSTouchBarItemIdentifier): NSColorPickerTouchBarItem;
  colorPickerWithIdentifier_buttonImage(identifier: NSTouchBarItemIdentifier, image: NSImage): NSColorPickerTouchBarItem;
}

