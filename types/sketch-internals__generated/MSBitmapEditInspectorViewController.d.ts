interface MSBitmapEditInspectorViewControllerUninitialized<InitializedType = MSBitmapEditInspectorViewController> extends NSViewControllerUninitialized<MSBitmapEditInspectorViewController> {}

interface MSBitmapEditInspectorViewController extends NSViewController, IMSInspectorChildController {
  refresh(): void;
  prepareForDisplay(): void;
  selectionDidChangeTo(layers: NSArray<any> | any[]): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  layerPositionPossiblyChanged(): void;

  currentMode(): MSBitmapEditMode;
  setCurrentMode(currentMode: MSBitmapEditMode): void;
  selectionSize(): NSSize;
  setSelectionSize(selectionSize: NSSize): void;
  eventHandler(): MSBitmapEditEventHandler;
  setEventHandler(eventHandler: MSBitmapEditEventHandler): void;
}

declare const MSBitmapEditInspectorViewController: {
  alloc(): MSBitmapEditInspectorViewControllerUninitialized;
  class(): MSBitmapEditInspectorViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

