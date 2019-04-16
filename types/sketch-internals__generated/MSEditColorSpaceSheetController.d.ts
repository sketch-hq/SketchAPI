interface MSEditColorSpaceSheetControllerUninitialized<InitializedType = MSEditColorSpaceSheetController> extends CHSheetControllerUninitialized<MSEditColorSpaceSheetController> {}
interface MSEditColorSpaceSheetController extends CHSheetController {
  pickColorSpace(sender: any): IBAction;
  pickChangeLogic(sender: any): IBAction;
  viewDocumentation(sender: any): IBAction;

  assignButton(): NSButton;
  setAssignButton(assignButton: NSButton): void;
  assignDescriptionTextField(): NSTextField;
  setAssignDescriptionTextField(assignDescriptionTextField: NSTextField): void;
  colorSpacePopUpButton(): NSPopUpButton;
  setColorSpacePopUpButton(colorSpacePopUpButton: NSPopUpButton): void;
  descriptionTextField(): NSTextField;
  setDescriptionTextField(descriptionTextField: NSTextField): void;
  confirmButton(): NSButton;
  setConfirmButton(confirmButton: NSButton): void;
  convertButton(): NSButton;
  setConvertButton(convertButton: NSButton): void;
  convertDescriptionTextField(): NSTextField;
  setConvertDescriptionTextField(convertDescriptionTextField: NSTextField): void;
}
declare const MSEditColorSpaceSheetController: {
  alloc(): MSEditColorSpaceSheetControllerUninitialized;
  class(): MSEditColorSpaceSheetController;
}

