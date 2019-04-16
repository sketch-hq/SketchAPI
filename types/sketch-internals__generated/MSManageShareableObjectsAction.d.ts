interface MSManageShareableObjectsActionUninitialized<InitializedType = MSManageShareableObjectsAction> extends MSBaseSharedObjectActionUninitialized<MSManageShareableObjectsAction> {}
interface MSManageShareableObjectsAction extends MSBaseSharedObjectAction {
  showOrganiserSheet(sender: any): IBAction;
}
declare const MSManageShareableObjectsAction: {
  alloc(): MSManageShareableObjectsActionUninitialized;
  class(): MSManageShareableObjectsAction;
}

