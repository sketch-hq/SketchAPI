interface BrushUninitialized<InitializedType = Brush> extends NSObjectUninitialized<Brush> {}
interface Brush extends NSObject {
  mouseDown_inView_onCanvas(theEvent: NSEvent, view: NSView, canvas: Canvas): void;
  mouseDragged_inView_onCanvas(theEvent: NSEvent, view: NSView, canvas: Canvas): void;
  mouseUp_inView_onCanvas(theEvent: NSEvent, view: NSView, canvas: Canvas): void;
}
declare const Brush: {
  alloc(): BrushUninitialized;
  class(): Brush;
}

