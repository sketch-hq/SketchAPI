interface CanvasViewUninitialized<InitializedType = CanvasView> extends NSViewUninitialized<CanvasView> {}
interface CanvasView extends NSView {

  showPoints(): boolean;
  setShowPoints(showPoints: boolean): void;
  simplify(): boolean;
  setSimplify(simplify: boolean): void;
  fitCurve(): boolean;
  setFitCurve(fitCurve: boolean): void;
}
declare const CanvasView: {
  alloc(): CanvasViewUninitialized;
  class(): CanvasView;
}

