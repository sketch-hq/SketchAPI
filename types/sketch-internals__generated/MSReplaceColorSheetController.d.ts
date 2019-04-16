interface MSReplaceColorSheetControllerUninitialized<InitializedType = MSReplaceColorSheetController> extends CHSheetControllerUninitialized<MSReplaceColorSheetController> {}
interface MSReplaceColorSheetController extends CHSheetController, INSWindowDelegate, INSMenuDelegate {
  pickOriginalColor(sender: any): IBAction;
  toggleIgnoreAlpha(sender: any): IBAction;

  cancelButton(): NSButton;
  setCancelButton(cancelButton: NSButton): void;
  ignoreAlphaWhenMatchingOriginalColorButton(): NSButton;
  setIgnoreAlphaWhenMatchingOriginalColorButton(ignoreAlphaWhenMatchingOriginalColorButton: NSButton): void;
  originalColorButton(): MSStylePartPreviewButton;
  setOriginalColorButton(originalColorButton: MSStylePartPreviewButton): void;
  replacementColorButton(): MSColorWell;
  setReplacementColorButton(replacementColorButton: MSColorWell): void;
  keepAlphaOfOriginalColorButton(): NSButton;
  setKeepAlphaOfOriginalColorButton(keepAlphaOfOriginalColorButton: NSButton): void;
  replaceButton(): NSButton;
  setReplaceButton(replaceButton: NSButton): void;
}
declare const MSReplaceColorSheetController: {
  alloc(): MSReplaceColorSheetControllerUninitialized;
  class(): MSReplaceColorSheetController;
}

