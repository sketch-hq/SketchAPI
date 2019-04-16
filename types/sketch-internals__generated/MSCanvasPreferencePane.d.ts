interface MSCanvasPreferencePaneUninitialized<InitializedType = MSCanvasPreferencePane> extends MSPreferencePaneUninitialized<MSCanvasPreferencePane> {}
interface MSCanvasPreferencePane extends MSPreferencePane {
  adjustSnapColorAction(sender: any): IBAction;
  adjustFlowColorAction(sender: any): IBAction;

  flowColorWell(): NSColorWell;
  setFlowColorWell(flowColorWell: NSColorWell): void;
  flowColorLabel(): NSTextField;
  setFlowColorLabel(flowColorLabel: NSTextField): void;
}
declare const MSCanvasPreferencePane: {
  alloc(): MSCanvasPreferencePaneUninitialized;
  class(): MSCanvasPreferencePane;
}

