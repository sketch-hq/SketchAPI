interface MSMissingFontItemUninitialized<InitializedType = MSMissingFontItem> extends MSInspectorItemUninitialized<MSMissingFontItem> {}
interface MSMissingFontItem extends MSInspectorItem {

  missingFontsLabel(): NSTextField;
  setMissingFontsLabel(missingFontsLabel: NSTextField): void;
  missingFontFamilyButton(): NSButton;
  setMissingFontFamilyButton(missingFontFamilyButton: NSButton): void;
}
declare const MSMissingFontItem: {
  alloc(): MSMissingFontItemUninitialized;
  class(): MSMissingFontItem;
}

