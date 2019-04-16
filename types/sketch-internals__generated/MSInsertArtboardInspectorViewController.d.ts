interface MSInsertArtboardInspectorViewControllerUninitialized<InitializedType = MSInsertArtboardInspectorViewController> extends NSViewControllerUninitialized<MSInsertArtboardInspectorViewController> {}

interface MSInsertArtboardInspectorViewController extends NSViewController, IMSInspectorChildController {
  prepareForDisplay(): void;
  selectionDidChangeTo(layers: NSArray<any> | any[]): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  layerPositionPossiblyChanged(): void;

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
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

