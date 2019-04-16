interface CanvasUninitialized<InitializedType = Canvas> extends NSObjectUninitialized<Canvas> {}
interface Canvas extends NSObject {
  beginPathAtLocation_withWidth_color(location: NSPoint, width: CGFloat, color: NSColor): void;
  extendPathToLocation(location: NSPoint): void;
  endPath(): void;
  drawRect(dirtyRect: NSRect): void;

  showPoints(): boolean;
  setShowPoints(showPoints: boolean): void;
  simplify(): boolean;
  setSimplify(simplify: boolean): void;
  fitCurve(): boolean;
  setFitCurve(fitCurve: boolean): void;
}
declare const Canvas: {
  alloc(): CanvasUninitialized;
  class(): Canvas;
}

