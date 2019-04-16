interface MSToggleAlignmentGuidesActionUninitialized<InitializedType = MSToggleAlignmentGuidesAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleAlignmentGuidesAction> {}

interface MSToggleAlignmentGuidesAction extends MSToggleViewPreferenceAction {
  toggleAlignmentGuides(sender: any): IBAction;
}

declare const MSToggleAlignmentGuidesAction: {
  alloc(): MSToggleAlignmentGuidesActionUninitialized;
  class(): MSToggleAlignmentGuidesAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

