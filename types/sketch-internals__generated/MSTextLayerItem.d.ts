interface MSTextLayerItemUninitialized<InitializedType = MSTextLayerItem> extends MSInspectorItemUninitialized<MSTextLayerItem> {}
interface MSTextLayerItem extends MSInspectorItem, INSMenuDelegate, IMSColorInspectorDelegate, INSComboBoxDataSource, IMSStylePartPreviewButtonDelegate {
  fontFamilyAction(sender: any): IBAction;
  fontWeightAction(sender: any): IBAction;
  showColorPickerAction(sender: any): IBAction;
  verticalAlignmentAction(sender: any): IBAction;
  changeTextLayerFont(sender: any): IBAction;
  textView(): MSTextLayerTextView;
  putFocusOnTextView(): void;
  editTextPropertiesInBlock(block: BCVoidBlock): void;
  writeRun(run: MSTextAttributeRun): void;

  basicView(): NSView;
  setBasicView(basicView: NSView): void;
  fontFamilyButton(): NSButton;
  setFontFamilyButton(fontFamilyButton: NSButton): void;
  fontWeightPopUpButton(): NSPopUpButton;
  setFontWeightPopUpButton(fontWeightPopUpButton: NSPopUpButton): void;
  fontSizeField(): MSInlineUpDownTextField;
  setFontSizeField(fontSizeField: MSInlineUpDownTextField): void;
  colorPickerButton(): MSStylePartPreviewButton;
  setColorPickerButton(colorPickerButton: MSStylePartPreviewButton): void;
  kerningField(): MSInlineUpDownTextField;
  setKerningField(kerningField: MSInlineUpDownTextField): void;
  lineHeightField(): MSInlineUpDownTextField;
  setLineHeightField(lineHeightField: MSInlineUpDownTextField): void;
  paragraphHeightField(): MSInlineUpDownTextField;
  setParagraphHeightField(paragraphHeightField: MSInlineUpDownTextField): void;
  alignmentButton(): NSSegmentedControl;
  setAlignmentButton(alignmentButton: NSSegmentedControl): void;
  verticalAlignmentButton(): NSSegmentedControl;
  setVerticalAlignmentButton(verticalAlignmentButton: NSSegmentedControl): void;
}
declare const MSTextLayerItem: {
  alloc(): MSTextLayerItemUninitialized;
  class(): MSTextLayerItem;
}

