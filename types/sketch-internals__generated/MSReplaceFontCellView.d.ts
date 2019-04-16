interface MSReplaceFontCellViewUninitialized<InitializedType = MSReplaceFontCellView> extends NSTableCellViewUninitialized<MSReplaceFontCellView> {}

interface MSReplaceFontCellView extends NSTableCellView {

  fontFamilyButton(): NSButton;
  setFontFamilyButton(fontFamilyButton: NSButton): void;
  fontWeightPopUpButton(): NSPopUpButton;
  setFontWeightPopUpButton(fontWeightPopUpButton: NSPopUpButton): void;
}

declare const MSReplaceFontCellView: {
  alloc(): MSReplaceFontCellViewUninitialized;
  class(): MSReplaceFontCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

