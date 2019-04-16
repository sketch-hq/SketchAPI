interface INSColorPickingDefault {
  provideNewButtonImage(): NSImage;
  insertNewButtonImage_in(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
  viewSizeChanged(sender: any | null): void;
  alphaControlAddedOrRemoved(sender: any | null): void;
  attachColorList(colorList: NSColorList): void;
  detachColorList(colorList: NSColorList): void;
  setMode(mode: NSColorPanelMode): void;
  buttonToolTip(): NSString;
  minContentSize(): NSSize;
}

