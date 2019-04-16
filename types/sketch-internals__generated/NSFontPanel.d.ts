interface NSFontPanelUninitialized<InitializedType = NSFontPanel> extends NSPanelUninitialized<NSFontPanel> {}

interface NSFontPanel extends NSPanel {
  setPanelFont_isMultiple(fontObj: NSFont, flag: boolean): void;
  panelConvertFont(fontObj: NSFont): NSFont;
  reloadDefaultFontFamilies(): void;

  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  worksWhenModal(): boolean;
  setWorksWhenModal(worksWhenModal: boolean): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
}

declare const NSFontPanel: {
  alloc(): NSFontPanelUninitialized;
  class(): NSFontPanel;
  sharedFontPanel(): NSFontPanel;
  sharedFontPanelExists(): boolean;

}

