interface NSGraphicsContextUninitialized<InitializedType = NSGraphicsContext> extends NSObjectUninitialized<NSGraphicsContext> {}
interface NSGraphicsContext extends NSObject {
  saveGraphicsState(): void;
  restoreGraphicsState(): void;
  flushGraphics(): void;
  focusStack(): any;
  setFocusStack(stack: any): void;

  attributes(): NSDictionary<any, any>;
  drawingToScreen(): boolean;
  CGContext(): CGContextRef;
  flipped(): boolean;
  shouldAntialias(): boolean;
  setShouldAntialias(shouldAntialias: boolean): void;
  imageInterpolation(): NSImageInterpolation;
  setImageInterpolation(imageInterpolation: NSImageInterpolation): void;
  patternPhase(): NSPoint;
  setPatternPhase(patternPhase: NSPoint): void;
  compositingOperation(): NSCompositingOperation;
  setCompositingOperation(compositingOperation: NSCompositingOperation): void;
  colorRenderingIntent(): NSColorRenderingIntent;
  setColorRenderingIntent(colorRenderingIntent: NSColorRenderingIntent): void;
  CIContext(): CIContext;
  graphicsPort(): void;
}
declare const NSGraphicsContext: {
  alloc(): NSGraphicsContextUninitialized;
  class(): NSGraphicsContext;  graphicsContextWithAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSGraphicsContext;
  graphicsContextWithWindow(window: NSWindow): NSGraphicsContext;
  graphicsContextWithBitmapImageRep(bitmapRep: NSBitmapImageRep): NSGraphicsContext;
  graphicsContextWithCGContext_flipped(graphicsPort: CGContextRef, initialFlippedState: boolean): NSGraphicsContext;
  currentContextDrawingToScreen(): boolean;
  setGraphicsState(gState: NSInteger): void;
  graphicsContextWithGraphicsPort_flipped(graphicsPort: void, initialFlippedState: boolean): NSGraphicsContext;

  currentContext(): NSGraphicsContext;
  setCurrentContext(currentContext: NSGraphicsContext): void;

}

