interface MSActionGroupUninitialized<InitializedType = MSActionGroup> extends MSDocumentActionUninitialized<MSActionGroup> {}
interface MSActionGroup extends MSDocumentAction {
  actionNames(): NSArray<any>;
  childActions(): NSArray<any>;
  supportsState(): boolean;
}
declare const MSActionGroup: {
  alloc(): MSActionGroupUninitialized;
  class(): MSActionGroup;
}

