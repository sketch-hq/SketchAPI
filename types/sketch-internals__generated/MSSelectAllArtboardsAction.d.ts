interface MSSelectAllArtboardsActionUninitialized<InitializedType = MSSelectAllArtboardsAction> extends MSDocumentActionUninitialized<MSSelectAllArtboardsAction> {}
interface MSSelectAllArtboardsAction extends MSDocumentAction {
  selectAllArtboards(sender: any): IBAction;
}
declare const MSSelectAllArtboardsAction: {
  alloc(): MSSelectAllArtboardsActionUninitialized;
  class(): MSSelectAllArtboardsAction;
}

