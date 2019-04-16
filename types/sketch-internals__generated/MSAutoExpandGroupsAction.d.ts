interface MSAutoExpandGroupsActionUninitialized<InitializedType = MSAutoExpandGroupsAction> extends MSDocumentActionUninitialized<MSAutoExpandGroupsAction> {}
interface MSAutoExpandGroupsAction extends MSDocumentAction {
  autoExpandGroups(sender: any): IBAction;
}
declare const MSAutoExpandGroupsAction: {
  alloc(): MSAutoExpandGroupsActionUninitialized;
  class(): MSAutoExpandGroupsAction;
}

