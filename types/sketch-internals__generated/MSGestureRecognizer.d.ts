interface MSGestureRecognizerUninitialized<InitializedType = MSGestureRecognizer> extends NSObjectUninitialized<MSGestureRecognizer> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
}
interface MSGestureRecognizer extends NSObject {
  locationInLayer(layer: MSLayer | null): NSPoint;
  reset(): void;
  mouseDown_clickCount_modifierFlags(location: NSPoint, clickCount: NSUInteger, flags: NSEventModifierFlags): void;
  mouseUp_location(event: NSEvent, location: NSPoint): void;
  mouseDragged_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  keyDown(event: NSEvent): void;
  keyUp_flags(c: unichar, flags: NSUInteger): void;
  flagsChanged(event: NSEvent): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  state(): NSGestureRecognizerState;
  setState(state: NSGestureRecognizerState): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSGestureRecognizer: {
  alloc(): MSGestureRecognizerUninitialized;
  class(): MSGestureRecognizer;
}

