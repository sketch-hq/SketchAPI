interface MSColorControlsInspectorViewControllerUninitialized<InitializedType = MSColorControlsInspectorViewController> extends MSStylePartInspectorViewControllerUninitialized<MSColorControlsInspectorViewController> {}

interface MSColorControlsInspectorViewController extends MSStylePartInspectorViewController {
  reset(sender: any): IBAction;
}

declare const MSColorControlsInspectorViewController: {
  alloc(): MSColorControlsInspectorViewControllerUninitialized;
  class(): MSColorControlsInspectorViewController;
  stylePartViewController(): any;
}

