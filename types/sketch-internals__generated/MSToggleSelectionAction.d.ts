interface MSToggleSelectionActionUninitialized<InitializedType = MSToggleSelectionAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleSelectionAction> {}

interface MSToggleSelectionAction extends MSToggleViewPreferenceAction {
  toggleSelection(sender: any): IBAction;
}

declare const MSToggleSelectionAction: {
  alloc(): MSToggleSelectionActionUninitialized;
  class(): MSToggleSelectionAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

