interface MSWelcomeToSketchActionUninitialized<InitializedType = MSWelcomeToSketchAction> extends MSActionUninitialized<MSWelcomeToSketchAction> {}
interface MSWelcomeToSketchAction extends MSAction {
  welcomeToSketch(sender: any): IBAction;
}
declare const MSWelcomeToSketchAction: {
  alloc(): MSWelcomeToSketchActionUninitialized;
  class(): MSWelcomeToSketchAction;
}

