interface MSUngroupActionUninitialized<InitializedType = MSUngroupAction> extends MSDocumentActionUninitialized<MSUngroupAction> {}
interface MSUngroupAction extends MSDocumentAction {
  ungroup(sender: any): IBAction;
}
declare const MSUngroupAction: {
  alloc(): MSUngroupActionUninitialized;
  class(): MSUngroupAction;
}

