interface MSToggleFixToViewportActionUninitialized<InitializedType = MSToggleFixToViewportAction> extends MSDocumentActionUninitialized<MSToggleFixToViewportAction> {}
interface MSToggleFixToViewportAction extends MSDocumentAction {
  toggleFixToViewport(sender: any): IBAction;

  state(): NSCellStateValue;
}
declare const MSToggleFixToViewportAction: {
  alloc(): MSToggleFixToViewportActionUninitialized;
  class(): MSToggleFixToViewportAction;
}

