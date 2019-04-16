interface MSSyncLibraryActionUninitialized<InitializedType = MSSyncLibraryAction> extends MSDocumentActionUninitialized<MSSyncLibraryAction> {}
interface MSSyncLibraryAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSSyncLibraryAction: {
  alloc(): MSSyncLibraryActionUninitialized;
  class(): MSSyncLibraryAction;
}

