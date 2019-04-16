interface MSShapeEditingBehaviorUninitialized<InitializedType = MSShapeEditingBehavior> extends NSObjectUninitialized<MSShapeEditingBehavior> {
  initForDrawingNewShape(drawingNewShape: boolean): InitializedType;
}
interface MSShapeEditingBehavior extends NSObject {
  isAddingPoints(context: MSShapeChangeContext): boolean;
  canInsertPoints(): boolean;
  shouldClosePathWhenMouseDownOnHandleAtIndexPath_modifierFlags_context(indexPath: NSIndexPath, flags: NSEventModifierFlags, context: MSShapeChangeContext): boolean;

  isNewShape(): boolean;
  allowSelectionOnly(): boolean;
  setAllowSelectionOnly(allowSelectionOnly: boolean): void;
  allowClosingPathUsingMouse(): boolean;
  setAllowClosingPathUsingMouse(allowClosingPathUsingMouse: boolean): void;
}
declare const MSShapeEditingBehavior: {
  alloc(): MSShapeEditingBehaviorUninitialized;
  class(): MSShapeEditingBehavior;
}

