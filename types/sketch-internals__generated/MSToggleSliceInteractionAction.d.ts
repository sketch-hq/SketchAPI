interface MSToggleSliceInteractionActionUninitialized<InitializedType = MSToggleSliceInteractionAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleSliceInteractionAction> {}
interface MSToggleSliceInteractionAction extends MSToggleViewPreferenceAction {
  toggleSliceInteraction(sender: any): IBAction;
}
declare const MSToggleSliceInteractionAction: {
  alloc(): MSToggleSliceInteractionActionUninitialized;
  class(): MSToggleSliceInteractionAction;
}

