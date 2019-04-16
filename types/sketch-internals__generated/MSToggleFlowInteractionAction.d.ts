interface MSToggleFlowInteractionActionUninitialized<InitializedType = MSToggleFlowInteractionAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleFlowInteractionAction> {}
interface MSToggleFlowInteractionAction extends MSToggleViewPreferenceAction {
  toggleFlowInteraction(sender: any): IBAction;
}
declare const MSToggleFlowInteractionAction: {
  alloc(): MSToggleFlowInteractionActionUninitialized;
  class(): MSToggleFlowInteractionAction;
}

