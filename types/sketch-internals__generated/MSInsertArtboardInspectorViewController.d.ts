interface MSInsertArtboardInspectorViewControllerUninitialized<InitializedType = MSInsertArtboardInspectorViewController> extends NSViewControllerUninitialized<MSInsertArtboardInspectorViewController> {}
interface MSInsertArtboardInspectorViewController extends NSViewController, IMSInspectorChildController {

  shouldAddInsertFromSelectionItem(): boolean;
  setShouldAddInsertFromSelectionItem(shouldAddInsertFromSelectionItem: boolean): void;
  proposedArtboardSize(): NSSize;
  setProposedArtboardSize(proposedArtboardSize: NSSize): void;
  eventHandler(): MSInsertArtboardEventHandler;
  setEventHandler(eventHandler: MSInsertArtboardEventHandler): void;
}
declare const MSInsertArtboardInspectorViewController: {
  alloc(): MSInsertArtboardInspectorViewControllerUninitialized;
  class(): MSInsertArtboardInspectorViewController;
}

