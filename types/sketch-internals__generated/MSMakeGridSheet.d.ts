interface MSMakeGridSheetUninitialized<InitializedType = MSMakeGridSheet> extends CHSheetControllerUninitialized<MSMakeGridSheet> {}
interface MSMakeGridSheet extends CHSheetController {

  doc(): MSDocument;
  setDoc(doc: MSDocument): void;
  subtextField(): NSTextField;
  setSubtextField(subtextField: NSTextField): void;
}
declare const MSMakeGridSheet: {
  alloc(): MSMakeGridSheetUninitialized;
  class(): MSMakeGridSheet;
}

