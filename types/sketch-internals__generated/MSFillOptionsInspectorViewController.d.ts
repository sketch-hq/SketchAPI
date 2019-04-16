interface MSFillOptionsInspectorViewControllerUninitialized<InitializedType = MSFillOptionsInspectorViewController> extends NSViewControllerUninitialized<MSFillOptionsInspectorViewController> {}

interface MSFillOptionsInspectorViewController extends NSViewController {

  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
}

declare const MSFillOptionsInspectorViewController: {
  alloc(): MSFillOptionsInspectorViewControllerUninitialized;
  class(): MSFillOptionsInspectorViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

