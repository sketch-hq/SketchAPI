interface MSSaveAsTemplateSheetUninitialized<InitializedType = MSSaveAsTemplateSheet> extends CHSheetControllerUninitialized<MSSaveAsTemplateSheet> {}

interface MSSaveAsTemplateSheet extends CHSheetController {

  inputCompletionBlock(): MSSaveAsTemplateSheetCompletionBlock;
  setInputCompletionBlock(inputCompletionBlock: MSSaveAsTemplateSheetCompletionBlock): void;
  inputField(): NSTextField;
  setInputField(inputField: NSTextField): void;
}

declare const MSSaveAsTemplateSheet: {
  alloc(): MSSaveAsTemplateSheetUninitialized;
  class(): MSSaveAsTemplateSheet;
  runForDocument_completionBlock(document: MSDocument, block: MSSaveAsTemplateSheetCompletionBlock): any;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

