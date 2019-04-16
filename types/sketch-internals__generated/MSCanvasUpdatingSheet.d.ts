interface MSCanvasUpdatingSheetUninitialized<InitializedType = MSCanvasUpdatingSheet> extends CHSheetControllerUninitialized<MSCanvasUpdatingSheet> {}

interface MSCanvasUpdatingSheet extends CHSheetController {
  performOperation(): void;
  schedulePerformOperation(): void;
  triggerPerformOperation(): void;
  storeState(): void;
  restoreState(): void;
  historyMomentTitle(): NSString;
  doc(): MSDocument;
}

declare const MSCanvasUpdatingSheet: {
  alloc(): MSCanvasUpdatingSheetUninitialized;
  class(): MSCanvasUpdatingSheet;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

