interface MSRunCustomScriptSheetUninitialized<InitializedType = MSRunCustomScriptSheet> extends CHSheetControllerUninitialized<MSRunCustomScriptSheet> {}
interface MSRunCustomScriptSheet extends CHSheetController, INSTextViewDelegate {
  saveAction(sender: any): IBAction;
  scriptingMenuAction(sender: any): IBAction;

  logField(): NSTextView;
  setLogField(logField: NSTextView): void;
}
declare const MSRunCustomScriptSheet: {
  alloc(): MSRunCustomScriptSheetUninitialized;
  class(): MSRunCustomScriptSheet;
}

