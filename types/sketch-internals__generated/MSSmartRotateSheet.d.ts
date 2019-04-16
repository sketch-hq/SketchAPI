interface MSSmartRotateSheetUninitialized<InitializedType = MSSmartRotateSheet> extends CHSheetControllerUninitialized<MSSmartRotateSheet> {}
interface MSSmartRotateSheet extends CHSheetController {

  explanationLabel(): NSTextField;
  setExplanationLabel(explanationLabel: NSTextField): void;
  numberOfCopies(): NSInteger;
  setNumberOfCopies(numberOfCopies: NSInteger): void;
}
declare const MSSmartRotateSheet: {
  alloc(): MSSmartRotateSheetUninitialized;
  class(): MSSmartRotateSheet;
}

