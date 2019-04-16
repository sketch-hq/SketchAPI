interface MSBorderOptionsInspectorViewControllerUninitialized<InitializedType = MSBorderOptionsInspectorViewController> extends MSStylePartInspectorViewControllerUninitialized<MSBorderOptionsInspectorViewController> {}

interface MSBorderOptionsInspectorViewController extends MSStylePartInspectorViewController {
  startDecorationAction(sender: any): IBAction;
  endDecorationAction(sender: any): IBAction;
  capAction(sender: any): IBAction;
  joinAction(sender: any): IBAction;
  dashPatternAction(sender: any): IBAction;
  reloadData(): void;

  hasOpenPathLayer(): boolean;
  setHasOpenPathLayer(hasOpenPathLayer: boolean): void;
}

declare const MSBorderOptionsInspectorViewController: {
  alloc(): MSBorderOptionsInspectorViewControllerUninitialized;
  class(): MSBorderOptionsInspectorViewController;
  stylePartViewController(): any;
}

