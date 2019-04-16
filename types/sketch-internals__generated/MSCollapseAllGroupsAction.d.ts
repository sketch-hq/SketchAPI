interface MSCollapseAllGroupsActionUninitialized<InitializedType = MSCollapseAllGroupsAction> extends MSDocumentActionUninitialized<MSCollapseAllGroupsAction> {}
interface MSCollapseAllGroupsAction extends MSDocumentAction {
  collapseAllGroups(sender: any): IBAction;
}
declare const MSCollapseAllGroupsAction: {
  alloc(): MSCollapseAllGroupsActionUninitialized;
  class(): MSCollapseAllGroupsAction;
}

