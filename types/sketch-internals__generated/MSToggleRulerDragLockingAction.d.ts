interface MSToggleRulerDragLockingActionUninitialized<InitializedType = MSToggleRulerDragLockingAction> extends MSDocumentActionUninitialized<MSToggleRulerDragLockingAction> {}

interface MSToggleRulerDragLockingAction extends MSDocumentAction {
  toggleRulerDragLocking(sender: any): IBAction;
}

declare const MSToggleRulerDragLockingAction: {
  alloc(): MSToggleRulerDragLockingActionUninitialized;
  class(): MSToggleRulerDragLockingAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

