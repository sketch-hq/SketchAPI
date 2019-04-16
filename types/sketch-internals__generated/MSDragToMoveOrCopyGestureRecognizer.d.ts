interface MSDragToMoveOrCopyGestureRecognizerUninitialized<InitializedType = MSDragToMoveOrCopyGestureRecognizer> extends MSDragGestureRecognizerUninitialized<MSDragToMoveOrCopyGestureRecognizer> {}
interface MSDragToMoveOrCopyGestureRecognizer extends MSDragGestureRecognizer {
  translationInLayer(layer: MSLayer | null): CGVector;
  locationInLayer(layer: MSLayer | null): NSPoint;

  shouldCopyDraggedItems(): boolean;
  shouldSnap(): boolean;
  alignModifierMask(): NSEventModifierFlags;
  setAlignModifierMask(alignModifierMask: NSEventModifierFlags): void;
  shouldInterpretAlignment(): boolean;
  setShouldInterpretAlignment(shouldInterpretAlignment: boolean): void;
  align(): boolean;
  alignmentAxis(): NSNumber;
  draggedItem(): any;
  setDraggedItem(draggedItem: any): void;
  originalDraggedItems(): NSArray<any>;
  setOriginalDraggedItems(originalDraggedItems: NSArray<any> | any[]): void;
  originalDragPositions(): NSArray<any>;
  setOriginalDragPositions(originalDragPositions: NSArray<any> | any[]): void;
  copiedItems(): NSArray<any>;
  setCopiedItems(copiedItems: NSArray<any> | any[]): void;
}
declare const MSDragToMoveOrCopyGestureRecognizer: {
  alloc(): MSDragToMoveOrCopyGestureRecognizerUninitialized;
  class(): MSDragToMoveOrCopyGestureRecognizer;
}

