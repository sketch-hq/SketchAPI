interface MSOpenStyleInLibraryActionUninitialized<InitializedType = MSOpenStyleInLibraryAction> extends MSOpenInLibraryActionUninitialized<MSOpenStyleInLibraryAction> {}
interface MSOpenStyleInLibraryAction extends MSOpenInLibraryAction {
  openLibraryForStyles(sender: any): void;
}
declare const MSOpenStyleInLibraryAction: {
  alloc(): MSOpenStyleInLibraryActionUninitialized;
  class(): MSOpenStyleInLibraryAction;
}

