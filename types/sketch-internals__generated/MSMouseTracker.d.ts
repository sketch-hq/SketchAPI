interface MSMouseTrackerUninitialized<InitializedType = MSMouseTracker> extends NSObjectUninitialized<MSMouseTracker> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
}
interface MSMouseTracker extends NSObject {
  sendAction(): void;
  locationInView(view: NSView | null): NSPoint;
  mouseEntered(event: NSEvent): void;
  mouseMoved(event: NSEvent): void;
  mouseExited(event: NSEvent | null): void;
  flagsChanged(event: NSEvent): void;
  mouseDown(event: NSEvent): void;
  mouseDragged(event: NSEvent): void;
  mouseUp(event: NSEvent): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  trackingState(): MSMouseTrackingState;
  view(): NSView;
  setView(view: NSView): void;
  modifierFlags(): NSEventModifierFlags;
  canUpdateCursor(): boolean;
}
declare const MSMouseTracker: {
  alloc(): MSMouseTrackerUninitialized;
  class(): MSMouseTracker;
}

