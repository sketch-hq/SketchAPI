interface MSDragToSelectGestureRecognizerUninitialized<InitializedType = MSDragToSelectGestureRecognizer> extends MSDragGestureRecognizerUninitialized<MSDragToSelectGestureRecognizer> {}
interface MSDragToSelectGestureRecognizer extends MSDragGestureRecognizer {
  selectionRect(): NSRect;

  extendSelection(): boolean;
  selectionExtensionMask(): NSEventModifierFlags;
  setSelectionExtensionMask(selectionExtensionMask: NSEventModifierFlags): void;
  initialSelection(): NSArray<any>;
  setInitialSelection(initialSelection: NSArray<any> | any[]): void;
}
declare const MSDragToSelectGestureRecognizer: {
  alloc(): MSDragToSelectGestureRecognizerUninitialized;
  class(): MSDragToSelectGestureRecognizer;
}

