interface MSExportFormatViewControllerUninitialized<InitializedType = MSExportFormatViewController> extends NSViewControllerUninitialized<MSExportFormatViewController> {}
interface MSExportFormatViewController extends NSViewController {
  prepare(): void;
  removeExportFormat(sender: any): IBAction;
  formatPopupAction(sender: any): IBAction;
  scaleFieldAction(sender: any): IBAction;

  formatPopup(): NSPopUpButton;
  setFormatPopup(formatPopup: NSPopUpButton): void;
  removeSizeButton(): NSButton;
  setRemoveSizeButton(removeSizeButton: NSButton): void;
  sizeView(): NSView;
  setSizeView(sizeView: NSView): void;
  suffixTextField(): MSExportFormatNamingTextField;
  setSuffixTextField(suffixTextField: MSExportFormatNamingTextField): void;
  exportFormats(): NSArray<any>;
  setExportFormats(exportFormats: NSArray<any> | any[]): void;
  scaleField(): MSTextFieldWithDropDownMenu;
  setScaleField(scaleField: MSTextFieldWithDropDownMenu): void;
  removeButtonHidden(): boolean;
  setRemoveButtonHidden(removeButtonHidden: boolean): void;
  drawOldFashioned(): boolean;
  setDrawOldFashioned(drawOldFashioned: boolean): void;
}
declare const MSExportFormatViewController: {
  alloc(): MSExportFormatViewControllerUninitialized;
  class(): MSExportFormatViewController;
}

