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
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;
  colorInspector_didChangeToColor(inspector: MSColorInspector, color: MSColor): void;
  inspectorDidChangeType(inspector: MSColorInspector): void;
  colorInspectorDidChange(inspector: MSColorInspector): void;
  colorInspectorWillClose(inspector: MSColorInspector): void;
  colorInspectorShouldAdjustInspectorToPopover(inspector: MSColorInspector): boolean;
  colorInspectorUndoManager(inspector: MSColorInspector): NSUndoManager;
  numberOfItemsInComboBox(comboBox: NSComboBox): NSInteger;
  comboBox_objectValueForItemAtIndex(comboBox: NSComboBox, index: NSInteger): any;
  comboBox_indexOfItemWithStringValue(comboBox: NSComboBox, string: NSString | string): NSUInteger;
  comboBox_completedString(comboBox: NSComboBox, string: NSString | string): NSString;

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
  itemForSection(section: MSBaseInspectorSection): MSTextLayerItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

