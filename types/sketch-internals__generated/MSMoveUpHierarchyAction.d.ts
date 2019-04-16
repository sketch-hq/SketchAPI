interface MSMoveUpHierarchyActionUninitialized<InitializedType = MSMoveUpHierarchyAction> extends MSDocumentActionUninitialized<MSMoveUpHierarchyAction> {}

interface MSMoveUpHierarchyAction extends MSDocumentAction {
  moveUpHierarchy(sender: any): IBAction;
}

declare const MSMoveUpHierarchyAction: {
  alloc(): MSMoveUpHierarchyActionUninitialized;
  class(): MSMoveUpHierarchyAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

