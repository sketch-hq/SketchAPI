interface MSExportPresetsPreferencePaneUninitialized<InitializedType = MSExportPresetsPreferencePane> extends MSPreferencePaneUninitialized<MSExportPresetsPreferencePane> {}
interface MSExportPresetsPreferencePane extends MSPreferencePane, INSTableViewDataSource, INSTableViewDelegate {
  editExportPreset(preset: MSExportPreset): void;
  addExportPreset(sender: any): IBAction;
  removeExportPreset(sender: any): IBAction;
  pickDefaultExportPreset(sender: any): IBAction;
  restoreDefaultExportPresets(sender: any): IBAction;
  addExportFormat(sender: any): IBAction;
  removeExportFormatFromPreset(sender: any): IBAction;
  commitExportPresetName(sender: any): IBAction;

  addButton(): NSButton;
  setAddButton(addButton: NSButton): void;
  addFormatButton(): NSButton;
  setAddFormatButton(addFormatButton: NSButton): void;
  exportFormatEditorView(): NSView;
  setExportFormatEditorView(exportFormatEditorView: NSView): void;
  exportFormatFooterView(): NSView;
  setExportFormatFooterView(exportFormatFooterView: NSView): void;
  exportFormatFooterBottomConstraint(): NSLayoutConstraint;
  setExportFormatFooterBottomConstraint(exportFormatFooterBottomConstraint: NSLayoutConstraint): void;
  exportFormatsView(): NSStackView;
  setExportFormatsView(exportFormatsView: NSStackView): void;
  exportFormatsViewController(): MSExportFormatViewController;
  setExportFormatsViewController(exportFormatsViewController: MSExportFormatViewController): void;
  noPresetsPlaceholderView(): NSView;
  setNoPresetsPlaceholderView(noPresetsPlaceholderView: NSView): void;
  presetNameTextField(): NSTextField;
  setPresetNameTextField(presetNameTextField: NSTextField): void;
  removeButton(): NSButton;
  setRemoveButton(removeButton: NSButton): void;
  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
  presets(): NSArray<any>;
}
declare const MSExportPresetsPreferencePane: {
  alloc(): MSExportPresetsPreferencePaneUninitialized;
  class(): MSExportPresetsPreferencePane;  localizedNewExportPresetName(): NSString;

}

