interface MSBitmapEditInspectorViewControllerUninitialized<InitializedType = MSBitmapEditInspectorViewController> extends NSViewControllerUninitialized<MSBitmapEditInspectorViewController> {}
interface MSBitmapEditInspectorViewController extends NSViewController, IMSInspectorChildController {
  refresh(): void;

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
}

