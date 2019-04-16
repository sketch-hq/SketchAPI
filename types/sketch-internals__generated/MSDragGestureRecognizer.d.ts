interface MSDragGestureRecognizerUninitialized<InitializedType = MSDragGestureRecognizer> extends MSGestureRecognizerUninitialized<MSDragGestureRecognizer> {}

interface MSDragGestureRecognizer extends MSGestureRecognizer {
  locationInLayer(layer: MSLayer | null): NSPoint;
  translationInLayer(layer: MSLayer | null): CGVector;
  setTranslation_inLayer(translation: CGVector, layer: MSLayer | null): void;
  translationAsPointInLayer(layer: MSLayer | null): NSPoint;
  originInLayer(layer: MSLayer | null): NSPoint;

  beginsUponMouseDown(): boolean;
  setBeginsUponMouseDown(beginsUponMouseDown: boolean): void;
  translationLocked(): boolean;
  setTranslationLocked(translationLocked: boolean): void;
  modifierFlags(): NSEventModifierFlags;
}

declare const MSDragGestureRecognizer: {
  alloc(): MSDragGestureRecognizerUninitialized;
  class(): MSDragGestureRecognizer;
}

